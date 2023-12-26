import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Missing = () => {
  return (
    <main className="Missing">
      <h2> Page not found</h2>
      <p> That is disappointing</p>
      <p>
        <Link to="/">Visit Out Home page</Link>
      </p>
    </main>
  );
};

export default Missing;
