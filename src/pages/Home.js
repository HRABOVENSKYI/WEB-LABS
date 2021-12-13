import React, { useContext } from "react";
import Wrapper from "../components/Cards/Wrapper";
import ZooList from "../components/Cards/ZooList";
import Heading from "../components/Heading/Heading";
import AddButton from "../components/Menu/AddButton";
import ListingTitle from "../components/Menu/ListingTitle";
import { GlobalContext } from "../context/GlobalState";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const { zoos, user } = useContext(GlobalContext);

  const firstZoo = zoos[0];

  if (!zoos.length) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {zoos.length > 0 ? <Heading zoo={firstZoo} /> : ""}
      <div className="my-6 flex justify-between">
        <ListingTitle />
        <AddButton to={user.role === "ADMIN" ? "/add" : "/"} />
      </div>
      <ZooList />
    </Wrapper>
  );
};

export default Home;
