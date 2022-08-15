import { createContext, Dispatch, SetStateAction, useContext } from "react";

type AdminContextState = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
};

export const AdminContext = createContext<AdminContextState>(
  {} as AdminContextState
);

export const useAdminContext = () => useContext(AdminContext);
