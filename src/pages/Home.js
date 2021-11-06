import React, {useContext} from "react";
import Wrapper from "../components/Cards/Wrapper";
import ZooList from "../components/Cards/ZooList";
import Heading from "../components/Heading/Heading";
import AddButton from "../components/Menu/AddButton";
import ListingTitle from "../components/Menu/ListingTitle";
import { GlobalContext } from "../context/GlobalState";

const Home = () => {
  const { zoos } = useContext(GlobalContext);

  const firstZoo = zoos[0];

  return (
    <React.Fragment>
        <Wrapper>
          <Heading zoo={firstZoo} />
          <div className="my-6 flex justify-between">
            <ListingTitle />
            <AddButton />
          </div>
          <ZooList />
        </Wrapper>
    </React.Fragment>
  );
};

export default Home;
