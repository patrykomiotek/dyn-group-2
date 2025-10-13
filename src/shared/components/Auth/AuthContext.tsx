// import type { Dispatch } from "@reduxjs/toolkit";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  // type SetStateAction,
} from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
  // setIsLoggedIn: Dispatch<SetStateAction<boolean>>
  toggle: () => void;
  login: () => void;
  logout: () => void;
}

// 1 - context
const AuthContext = createContext<AuthContextProps | null>(null);

// 2 - internal hook for testing
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggle = useCallback(() => setIsLoggedIn((value) => !value), []);
  const login = useCallback(() => setIsLoggedIn(true), []);
  const logout = useCallback(() => setIsLoggedIn(false), []);

  return useMemo(
    () => ({ isLoggedIn, toggle, login, logout }),
    [isLoggedIn, toggle, login, logout]
  );
};

// 3 - external hook for components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  }
  throw new Error("Component should be placed inside AuthProvider");
};

// 4 - AuthProvider component for the App
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, toggle, login, logout } = useAuth();
  return (
    <AuthContext.Provider value={{ isLoggedIn, toggle, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
