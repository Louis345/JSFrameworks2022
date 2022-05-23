import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";

const Home = lazy(() => import("./Home"));
const Favorites = lazy(() => import("./Favorites"));
const Settings = lazy(() => import("./Settings"));

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Suspense>
          <Switch>
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/settings" component={Settings} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
}

export default App;
