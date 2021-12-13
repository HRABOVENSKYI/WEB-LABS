import React, { useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import AddZoo from "./pages/AddZoo";
import EditZoo from "./pages/EditZoo";
import Catalogue from "./pages/Catalog";
import Home from "./pages/Home";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";
import ZooDetails from "./pages/ZooDetails";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/LoginForm";
import { GlobalContext } from "./context/GlobalState";
import Wrapper from "./components/Cards/Wrapper";
import Loading from "./components/Loading/Loading";

function App() {
  const { isAuth, checkAuth, isLoading } = useContext(GlobalContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  if (isLoading) {
    return (
      <div>
        <Header />
        <Wrapper>
          <Loading />
        </Wrapper>
        <Footer />
      </div>
    );
  }

  if (!isAuth) {
    return (
      <Switch>
        <Route path="/register" component={RegistrationForm} exact />
        <Route path="/" component={LoginForm} exact />
      </Switch>
    );
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/catalog" component={Catalogue} exact />
        <Route path="/catalog/:id" component={ZooDetails} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/add" component={AddZoo} exact />
        <Route path="/edit/:id" component={EditZoo} exact />
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/success" component={Success} exact />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
