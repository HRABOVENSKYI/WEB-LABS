import { GlobalProvider } from "./context/GlobalState";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AddZoo from "./pages/AddZoo";
import EditZoo from "./pages/EditZoo";

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddZoo} exact />
        <Route path="/edit/:id" component={EditZoo} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
