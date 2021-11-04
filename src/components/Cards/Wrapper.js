import React from "react";

const Wrapper = ({children}) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pt-10">
      {children}
    </section>
  );
};

export default Wrapper;
