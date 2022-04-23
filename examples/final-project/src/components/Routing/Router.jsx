import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Login from "../Login/Login";
import Home from "../Home/Home";
import FileNotFound from "../FileNotFound/FileNotFound";

function Router() {
  return (
    <Switch>
      {/* The ProtectedRoute will redirect the user to the login form if they haven't logged in. */}
      <ProtectedRoute exact path="/home">
        <Home />
      </ProtectedRoute>

      <Route exact path="/login" component={Login} />

      {/* If no matches, display a 404 File Not Found page if logged in. If not logged in, the <ProtectedRoute /> will redirect to the login form. */}
      <ProtectedRoute path="/">
        <FileNotFound />
      </ProtectedRoute>
    </Switch>
  );
}

export default Router;
