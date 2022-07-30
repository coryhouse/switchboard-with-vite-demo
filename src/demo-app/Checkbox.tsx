import cx from "clsx";

interface CheckboxProps extends React.ComponentPropsWithoutRef<"input"> {
  /** Input label */
  label: string;
}

export default function Input(props: CheckboxProps) {
  const { id, onChange, value, className, ...rest } = props;
  return (
    <span>
      <input
        className={cx(
          "border-slate-400 border-solid border p-1 rounded",
          className
        )}
        type="checkbox"
        id={id}
        value={value}
        onChange={onChange}
        {...rest}
      />
      <label htmlFor={id}>{props.label}</label>
    </span>
  );
}
