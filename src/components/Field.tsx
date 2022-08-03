import cx from "clsx";

type FieldProps = {
  /** Child elements */
  children: React.ReactNode;

  /** Set to true to style the field visually as customized */
  customized?: boolean;
};

export default function Field({ children, customized = false }: FieldProps) {
  return (
    <div
      className={cx(
        { "bg-yellow-100 border-red-500 border": customized },
        "mt-4"
      )}
    >
      {children}
    </div>
  );
}
