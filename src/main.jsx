import React from "react";
import ReactDOM from "react-dom/client";
import BrowserRouter from "./BrowserRouter";
import Route from "./Route";
import Link from "./Link";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <p>This is from Root</p>
      <Route path="/1">
        <p>This is p1</p>
        <Link to="/2">Go to 2</Link>
      </Route>
      <Route path="/2">
        <p>This is p2</p>
        <Link to="/1">Go to 1</Link>
      </Route>
    </BrowserRouter>
  </React.StrictMode>
);
