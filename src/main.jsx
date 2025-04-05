import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/global.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);

// Basic react version         jsx version
// React.createElement(App); = <App/>

// root.render(
// <h1 className="text-danger">Hello {worldText}</h1>
// React.createElement("h1", { className: "text-danger" }, "Hello" + worldText)
// );
