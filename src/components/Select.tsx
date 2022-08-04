import clsx from "clsx";
import Label from "./Label";

interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
  /** Set to true to highlight the label so that it is visually marked as changed from the default. */
  changed?: boolean;

  /** Input label */
  label: string;
}

export default function Select(props: SelectProps) {
  const { id, onChange, changed = false, label, value, ...rest } = props;
  return (
    <>
      <Label className="block" htmlFor={id}>
        {label}
      </Label>
      <select
        className={clsx("border-slate-400 border-solid border p-1 rounded", {
          "bg-yellow-100": changed,
        })}
        id={id}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </>
  );
}
