import clsx from "clsx";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export const AdminButton = ({
  children,
  className = "",
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => (
  <button
    className={clsx("border-2 border-white rounded-md py-4", className)}
    type="submit"
    {...props}
  >
    {children}
  </button>
);
