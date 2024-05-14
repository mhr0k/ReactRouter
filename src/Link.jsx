import { useContext } from "react";
import { Router } from "./BrowserRouter";

function Link({ to: destination, children }) {
  const [currentURL, setCurrentURL] = useContext(Router);

  function handleChange(e) {
    e.preventDefault();
    const url = currentURL.origin + destination;
    history.pushState(url, null, url);
    setCurrentURL(new URL(url));
  }

  return (
    <a href={destination} onClick={handleChange}>
      {children}
    </a>
  );
}

export default Link;
