// src/Button.jsx
import * as React from "react";
var Button = ({ href = "#", children }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "inline-flex rounded-md shadow"
  }, /* @__PURE__ */ React.createElement("a", {
    href,
    className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
  }, children));
};
export {
  Button
};
