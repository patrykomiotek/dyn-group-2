import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Menu } from "./Menu";
import { AuthProvider } from "../Auth/AuthContext";

export function Layout() {
  return (
    <div>
      <Menu />
      <AuthProvider>
        <Outlet />
      </AuthProvider>
      <Footer />
    </div>
  );
}
