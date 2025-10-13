// browserRouter - /registration, /sign-up
// hashRouter - /#registration
// memoryRouter - /
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Layout } from "@/shared/components/Layout/Layout";
import { ProductsListPage } from "./pages/ProductsListPage";
import { CreateProductPage } from "./pages/CreateProductPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { LoginPage } from "./pages/LoginPage";

type Route = Record<
  string,
  {
    path: string;
    title: string;
  }
>;

export const Route: Route = {
  HOME: {
    path: "/",
    title: "Home",
  },
  REGISTRATION: {
    path: "/registration",
    title: "Registration",
  },
  PRODUCTS_LIST: {
    path: "/products",
    title: "Products",
  },
  CREATE_PRODUCT: {
    path: "/create-product",
    title: "Create Product",
  },
  PRODUCT_DETAILS: {
    path: "/products/:id",
    title: "Product Details",
  },
  LOGIN: {
    path: "/login",
    title: "Login",
  },
};

export const router = createBrowserRouter([
  {
    path: Route.HOME.path, // "/"",
    element: <Layout />,
    children: [
      {
        path: Route.HOME.path,
        element: <HomePage />,
      },
      {
        path: Route.PRODUCTS_LIST.path,
        element: <ProductsListPage />,
      },
      {
        path: Route.CREATE_PRODUCT.path,
        element: <CreateProductPage />,
      },
      {
        path: Route.PRODUCT_DETAILS.path,
        element: <ProductDetailsPage />,
      },
      {
        path: Route.LOGIN.path,
        element: <LoginPage />,
      },
    ],
  },
]);
