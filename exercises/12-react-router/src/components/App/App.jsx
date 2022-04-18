import { Switch, Route } from "react-router-dom"
import Home from "../Home/Home";
import Category from "../Category/Category";

function App() {

  return (
    <>
      <div className="bg-success text-white pt-1 pb-1 mb-3">
        <h1 className="container h2">NoName E-Commerce</h1>
      </div>
      <main className="container mb-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category/:category" component={Category} />
        </Switch>
      </main>
    </>
  );
}

export default App;
