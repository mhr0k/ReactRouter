import React from "react";
import ReactDOM from "react-dom/client";
import BrowserRouter from "./BrowserRouter";
import Route from "./Route";
import Nav from "./Nav";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <p>This is from Root</p>
      <Route path="">
        <p>This is Home</p>
      </Route>
      <Route path="/1">
        <p>This is p1</p>
      </Route>
      <Route path="/2">
        <p>This is p2</p>
      </Route>
    </BrowserRouter>
  </React.StrictMode>
);
