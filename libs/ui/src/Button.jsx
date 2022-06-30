import * as React from "react";

export const Button = ({ href = "#", children }) => {
  return (
    <div className="inline-flex rounded-md shadow">
      <a
        href={href}
        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        {children}
      </a>
    </div>
  );
};
