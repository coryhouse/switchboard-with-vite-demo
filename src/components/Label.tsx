import cx from "clsx";

interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {
  /** Label */
  children: React.ReactNode;

  /** Set to true to highlight the label so that it is visually marked as changed from the default. */
  changed?: boolean;
}

export default function Label({ children, htmlFor, changed }: LabelProps) {
  return (
    <label
      className={cx({ "bg-yellow-100": changed }, "block")}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
