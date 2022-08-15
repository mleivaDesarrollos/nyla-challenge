import Head from "next/head";
import type { PropsWithChildren } from "react";

export const AdminLayout = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => (
  <div className="h-screen bg-gray-500 text-white">
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </div>
);
