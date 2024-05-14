import { createContext, useState, useEffect } from "react";

const Router = createContext();

function BrowserRouter({ children }) {
  const [currentURL, setCurrentURL] = useState(new URL(window.location.href));

  useEffect(() => {
    console.log(currentURL);
    history.pushState(currentURL.pathname, "", currentURL.pathname);
  }, [currentURL]);

  useEffect(() => {}, []);

  return (
    <Router.Provider value={[currentURL, setCurrentURL]}>
      {children}
    </Router.Provider>
  );
}

export default BrowserRouter;
export { Router };
