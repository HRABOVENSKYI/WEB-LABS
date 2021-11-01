import React from "react";

import { Link } from "react-router-dom";

const CancelLink = () => {
  return (
    <div className="text-center mt-4 text-gray-500">
      <Link to="/">Cancel</Link>
    </div>
  );
};

export default CancelLink;
