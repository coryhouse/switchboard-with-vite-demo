import { FallbackProps } from "react-error-boundary";
import Button from "./Button";

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div role="alert" className="grid h-screen place-content-center">
      <p>Something went wrong.</p>
      <pre>{error.message}</pre>
      <Button
        className="bg-blue-600 text-white mt-4"
        onClick={resetErrorBoundary}
      >
        Try again
      </Button>
    </div>
  );
}
