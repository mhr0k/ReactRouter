import { useContext } from "react";
import { Router } from "./BrowserRouter";

function Link({ to: destination, children }) {
  const [currentURL, setCurrentURL] = useContext(Router);

  function handleChange(e) {
    e.preventDefault();
    setCurrentURL((prev) => new URL(destination, prev.origin));
  }

  return (
    <a href={destination} onClick={handleChange}>
      {children}
    </a>
  );
}

export default Link;
