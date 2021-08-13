import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./layout/Layout";
import Landing from "./pages/Landing";
import Login from './pages/Login';
import Profile from './pages/Profile';
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";

const App = () => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute exact path="/profile" component={Profile} />
        <PublicRoute exact restricted path='/login' component={Login}/>
        <PublicRoute path="/landing" component={Landing} />
        <Route path="/" exact>
          <Redirect to="/landing" />
        </Route>
        <Route path="*">
          <Redirect to="/landing" />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
