import { customResponseDefaults } from "../DevTools";
import { CustomResponse } from "../types/types";
import DeleteButton from "@repo/shared/delete-button";
import Input from "@repo/shared/input";

type CustomResponseFormProps<THandler> = {
  customResponse: CustomResponse<THandler>;
  setCustomResponses: React.Dispatch<
    React.SetStateAction<CustomResponse<THandler>[]>
  >;
};

export default function CustomResponseForm<THandler>({
  customResponse,
  setCustomResponses,
}: CustomResponseFormProps<THandler>) {
  const { handler, delay, status, response } = customResponse;

  // TODO: Support all response properties: https://mswjs.io/docs/api/response#properties
  return (
    <fieldset className="mt-4 border p-2">
      <legend>
        {(handler as string).toString()}{" "}
        <DeleteButton
          onClick={() =>
            setCustomResponses((r) => r.filter((e) => e.handler !== handler))
          }
        />
      </legend>
      <div className="flex flex-row">
        <Input
          id={`${handler}-delay`}
          type="number"
          changed={delay !== customResponseDefaults.delay}
          label="Delay"
          className="w-20 mr-4"
          value={delay}
          onChange={(e) =>
            setCustomResponses((r) =>
              r.map((s) =>
                s.handler === handler
                  ? {
                      ...s,
                      delay: parseInt(e.target.value),
                    }
                  : s
              )
            )
          }
        />

        <Input
          id={`${handler}-status`}
          type="number"
          changed={status !== customResponseDefaults.status}
          label="Status"
          className="w-20 mr-4"
          value={status}
          onChange={(e) =>
            setCustomResponses((r) =>
              r.map((s) =>
                s.handler === handler
                  ? {
                      ...s,
                      status: parseInt(e.target.value),
                    }
                  : s
              )
            )
          }
        />

        <Input
          id={`${handler}-custom-response`}
          type="text"
          changed={response !== customResponseDefaults.response}
          label="Response"
          className="w-20"
          value={response}
          placeholder="Default"
          onChange={(e) =>
            setCustomResponses((r) =>
              r.map((s) =>
                s.handler === handler
                  ? {
                      ...s,
                      response: e.target.value,
                    }
                  : s
              )
            )
          }
        />
      </div>
    </fieldset>
  );
}