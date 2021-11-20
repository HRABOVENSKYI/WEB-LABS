import React, { lazy, Suspense } from "react";
import { GlobalProvider } from "./context/GlobalState";
import { Route, Switch } from "react-router-dom";
import Catalogue from "./pages/Catalog";
import Home from "./pages/Home";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";
import ZooDetails from "./pages/ZooDetails";
import Loading from "./components/Loading/Loading";
import Wrapper from "./components/Cards/Wrapper";

const AddZoo = lazy(() => import("./pages/AddZoo"));
const EditZoo = lazy(() => import("./pages/EditZoo"));

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Suspense
        fallback={
          <Wrapper>
            <Loading />
          </Wrapper>
        }
      >
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/catalog" component={Catalogue} exact />
          <Route path="/catalog/:id" component={ZooDetails} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/add" component={AddZoo} exact />
          <Route path="/edit/:id" component={EditZoo} exact />
        </Switch>
      </Suspense>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
