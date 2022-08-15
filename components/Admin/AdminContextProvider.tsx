import { ReactNode, useEffect, useMemo, useState } from "react";
import { AdminContext } from "./context";
import { useCheckAdminRoutes } from "./hooks/useCheckAdminRoutes";

export const AdminContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");
  const [isBrowserTokenChecked, setIsBrowserTokenChecked] = useState(false);

  useCheckAdminRoutes(isBrowserTokenChecked, token);

  useEffect(() => {
    const browserToken = localStorage.getItem("accessToken");
    if (browserToken) {
      setToken(browserToken);
    }
    setIsBrowserTokenChecked(true);
  }, []);

  const contextValues = useMemo(() => ({ token, setToken }), [token, setToken]);

  return (
    <AdminContext.Provider value={contextValues}>
      {children}
    </AdminContext.Provider>
  );
};
