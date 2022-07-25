interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="border border-slate-400 p-1 bg-blue-600 rounded text-white"
      {...props}
    />
  );
}
