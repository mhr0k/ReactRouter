import { createContext, useState, useEffect } from "react";

const Router = createContext();

function BrowserRouter({ children }) {
  const [currentURL, setCurrentURL] = useState(new URL(window.location.href));

  useEffect(() => {
    function handlePopstate(e) {
      setCurrentURL(new URL(e.state));
    }

    window.addEventListener("popstate", handlePopstate);
    return () => window.removeEventListener("popstate", handlePopstate);
  }, []);

  return (
    <Router.Provider value={[currentURL, setCurrentURL]}>
      {children}
    </Router.Provider>
  );
}

export default BrowserRouter;
export { Router };
