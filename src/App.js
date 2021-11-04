import { GlobalProvider } from "./context/GlobalState";
import { Route, Switch } from "react-router-dom";
import AddZoo from "./pages/AddZoo";
import EditZoo from "./pages/EditZoo";
import Catalogue from "./pages/Catalog";
import Home from "./pages/Home";
import Header from "./components/Header/Navbar";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/catalog" component={Catalogue} exact />
        <Route path="/add" component={AddZoo} exact />
        <Route path="/edit/:id" component={EditZoo} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
