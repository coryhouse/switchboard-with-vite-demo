import test, { expect } from "@playwright/test";
import { devToolsPositions } from "../src/types/types";
import { buildUrl } from "../src/utils/url-utils";

test.describe("devtools", () => {
  test.describe("position", () => {
    devToolsPositions.forEach((position) => {
      test(`displays in the ${position}`, async ({ page }) => {
        await page.goto(buildUrl("/", { position }));

        if (position.includes("top")) page.locator(".top-0");
        if (position.includes("bottom")) page.locator(".bottom-0");
        if (position.includes("left")) page.locator(".left-0");
        if (position.includes("right")) page.locator(".right-0");
      });
    });
  });

  test.describe("defaults", () => {
    test("uses fallback defaults when no optional default overrides are provided", async ({
      page,
    }) => {
      await page.goto("/");
      await expect(page.getByLabel("Persona")).toBeVisible();

      // Should default to open
      await expect(
        page.getByRole("button", { name: "Close DevTools" })
      ).toBeVisible();

      // Should display in top left by default
      await expect(page.locator(".top-0")).toHaveCount(1);
      await expect(page.locator(".left-0")).toHaveCount(1);

      // Should have close via outside click off by default
      await expect(
        page.getByLabel("Close via outside click")
      ).not.toBeChecked();

      // Should have close via escape on by default
      await expect(page.getByLabel("Close via escape key")).toBeChecked();

      // Should have 0 Global delay by default
      await expect(page.getByLabel("Global Delay")).toHaveAttribute(
        "value",
        "0"
      );
    });
  });

  test.describe("when defaultToOpen is false", () => {
    test("is initially closed", async ({ page }) => {
      page.goto(buildUrl("/", { openByDefault: false }));
      await expect(page.getByLabel("User")).not.toBeVisible();
      await expect(
        page.getByRole("button", { name: "Open DevTools" })
      ).toBeVisible();
    });
  });

  test.describe('when the "Copy Settings" button is clicked', () => {
    // Note: We don't need to test that the URL actually works here since all other tests do that via the visitUrl command.
    test("should copy the settings to the clipboard", async ({
      page,
      context,
    }) => {
      // Overriding ALL settings to assure they all show up in the generated URL, and are reflected upon load.
      page.goto(
        buildUrl("/", {
          openByDefault: false,
          delay: 100,
          userId: 2,
          position: "top-right",
          customResponses: [
            {
              delay: 1,
              handler: "DELETE /todo/:id",
              status: 201,
              response: "test",
            },
          ],
        })
      );

      // Grant clipboard permissions to browser context
      await context.grantPermissions(["clipboard-read", "clipboard-write"]);

      // Must open via click since the URL above specifies DevTools should be closed by default.
      await page.getByRole("button", { name: "Open DevTools" }).click();

      await page.getByRole("button", { name: "Copy Settings" }).click();

      // Should change the button's label upon click
      await expect(
        page.getByRole("button", { name: "Copied ✅" })
      ).toBeVisible();

      // Get clipboard content after the link/button has been clicked
      const handle = await page.evaluateHandle(() =>
        navigator.clipboard.readText()
      );
      const clipboardContent = await handle.jsonValue();

      expect(clipboardContent).toEqual(
        "http://localhost:3000/todos?position=%22top-right%22&openByDefault=false&delay=100&customResponses=%5B%7B%22delay%22%3A1%2C%22handler%22%3A%22DELETE+%2Ftodo%2F%3Aid%22%2C%22status%22%3A201%2C%22response%22%3A%22test%22%7D%5D&userId=2"
      );
    });
  });
});
