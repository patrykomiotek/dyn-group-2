import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Menu } from "./Menu";
import { AuthProvider } from "../Auth/AuthContext";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";

export function Layout() {
  return (
    <div>
      <Menu />

      {/* <ErrorBoundary fallback={<p>Oh not sth went wrong!</p>}> */}
      <AuthProvider>
        <Outlet />
      </AuthProvider>
      {/* </ErrorBoundary> */}

      <Footer />
    </div>
  );
}
