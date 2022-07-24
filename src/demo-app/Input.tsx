interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  /** Input label */
  label: string;
}

export default function Input(props: InputProps) {
  return (
    <>
      <label className="block" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="border-slate-400 border-solid border p-1"
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}
