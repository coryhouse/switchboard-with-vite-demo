import Spinner from "../demo-app/Spinner";

type SpinnerWithMessageProps = {
  children: React.ReactNode;
};

export default function SpinnerMessage({ children }: SpinnerWithMessageProps) {
  return (
    <div aria-live="polite" className="absolute bottom-2 right-2">
      <span className="flex">
        {children}
        <Spinner className="ml-4" />
      </span>
    </div>
  );
}
