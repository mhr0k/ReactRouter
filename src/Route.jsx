import { useContext } from "react";
import { Router } from "./BrowserRouter";
import Link from "./Link";

function Route({ children, path }) {
  const [CurrentURL] = useContext(Router);
  const isUrlMatch = CurrentURL.pathname === path;

  return <>{isUrlMatch && children}</>;
}
export default Route;
