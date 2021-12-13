import React from "react";

import { Link } from "react-router-dom";

const CustomLink = ({ to, name }) => {
  return (
    <div className="text-center mt-4 text-gray-500">
      <Link to={to}>{name}</Link>
    </div>
  );
};

export default CustomLink;
