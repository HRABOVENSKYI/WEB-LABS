import React from "react";
import ZooList from "../components/Cards/ZooList";
import Menu from "../components/Menu/Menu";
import Title from "../components/Head/Title";
import { Link } from "react-router-dom";

const Catalogue = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Link to="/"><Title /></Link>
        <Menu />
        <ZooList />
      </div>
    </React.Fragment>
  );
};

export default Catalogue;
