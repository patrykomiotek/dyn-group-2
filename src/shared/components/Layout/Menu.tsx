import { Link } from "react-router-dom";
import { Route } from "../../../routes";
import { useAppSelector } from "@/shared/hooks/redux";

export function Menu() {
  const numberOfProducts = useAppSelector(
    (state) => state.basket.products.length
  );

  return (
    <nav>
      <ul className="flex space-x-2">
        <li>
          <Link to={Route.HOME.path} className="text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to={Route.REGISTRATION.path} className="text-blue-600">
            Registration
          </Link>
        </li>
        <li>
          <Link to={Route.PRODUCTS_LIST.path} className="text-blue-600">
            Products
          </Link>
        </li>
        <li>
          <Link to={Route.CREATE_PRODUCT.path} className="text-blue-600">
            Create product
          </Link>
        </li>
        <li>
          <Link to={Route.LOGIN.path} className="text-blue-600">
            Login
          </Link>
        </li>
        <li>Products: {numberOfProducts}</li>
      </ul>
    </nav>
  );
}
