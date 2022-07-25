import cx from "clsx";
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export default function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      className={cx(
        className,
        "border border-slate-400 p-1 bg-blue-600 rounded text-white"
      )}
      {...rest}
    />
  );
}
