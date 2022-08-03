import { FallbackProps } from "react-error-boundary";
import Button from "../components/Button";

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div role="alert" className="grid h-screen place-content-center">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <Button className="bg-blue-600 text-white" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  );
}
