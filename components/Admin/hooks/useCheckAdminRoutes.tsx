import { useRouter } from "next/router";
import { useEffect } from "react";

export const useCheckAdminRoutes = (
  isBrowserTokenChecked: boolean,
  token: string
) => {
  const router = useRouter();

  useEffect(() => {
    if (isBrowserTokenChecked) {
      const currentPath = window.location.pathname;

      if (["/admin/settings", "/admin"] && !token) {
        router.push("/admin/login");
        return;
      }

      if (["/admin/login", "/admin"].includes(currentPath) && token) {
        router.push("/admin/settings");
      }
    }
  }, [isBrowserTokenChecked, token]);
};
