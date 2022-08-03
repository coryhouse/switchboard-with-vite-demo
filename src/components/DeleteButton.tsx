import Button, { ButtonProps } from "./Button";
import cx from "clsx";

export default function DeleteButton(props: ButtonProps) {
  const { className, ...rest } = props;
  return (
    <Button
      className={cx(
        "bg-white border-none p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 w-16",
        className
      )}
      {...rest}
    >
      <span className="sr-only">Delete</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </Button>
  );
}
