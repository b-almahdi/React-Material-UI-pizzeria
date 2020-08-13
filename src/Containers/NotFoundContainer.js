import React from "react";

function NotFoundContainer() {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Page not found :(</h1>
      <br />
      <h2>
        Maybe the page you are looking for has been removed, or you typed in the
        wrong URL
      </h2>
    </div>
  );
}

export default NotFoundContainer;
