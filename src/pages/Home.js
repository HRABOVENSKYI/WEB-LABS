import React from "react";
import ZooList from "../components/Cards/ZooList";
import Menu from "../components/Menu/Menu";
import Title from "../components/Head/Title";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Title />
        <Menu />
        <ZooList />
      </div>
    </React.Fragment>
  );
};

export default Home;
