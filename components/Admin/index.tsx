import type { PropsWithChildren } from "react";
import { AdminLayout } from "../AdminLayout";
import { AdminContextProvider } from "./AdminContextProvider";

export const Admin = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <AdminLayout title={title}>
      <AdminContextProvider>{children}</AdminContextProvider>
    </AdminLayout>
  );
};
