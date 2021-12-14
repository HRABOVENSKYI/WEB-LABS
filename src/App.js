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
import authApi from "./api/auth";

function App() {
  const { isAuth, setIsAuth } = useContext(GlobalContext);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(true);
    authApi
      .validate(localStorage.getItem("token"))
      .then(({ data: isAuth }) => {
        setIsAuth(isAuth);
      })
      .catch((err) => {
        setIsAuth(false);
        console.log(err);
      })
      .finally(() => setisLoading(false));
  }, [setIsAuth]);

  if (!isAuth && isLoading) {
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

  if (isAuth && !isLoading) {
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

  if (!isAuth && !isLoading) {
    return (
      <Switch>
        <Route path="/register" component={RegistrationForm} exact />
        <Route path="/" component={LoginForm} exact />
      </Switch>
    );
  }

  return <div>Error</div>;
}

export default App;
