interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
  /** Input label */
  label: string;
}

export default function Select(props: SelectProps) {
  const { id, onChange, value, ...rest } = props;
  return (
    <div className="mt-4">
      <label className="block" htmlFor={id}>
        {props.label}
      </label>
      <select
        className="border-slate-400 border-solid border p-1 rounded"
        id={id}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}
