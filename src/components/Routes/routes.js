import React  from 'react';
import { Route, Switch,  BrowserRouter} from 'react-router-dom'
import LoginContainer from './components/login-container/login-container';
import Login from './components/login/login';
import Dashboard from './components/Dashboard/dashboard';
import CustomerCheckIn from './components/customer-check-in/customer.check.in';
const Routes = () => {
    return (  <div className="App">
    <BrowserRouter>
      <Switch>

        <Route
          exact
          path='/'
          component={LoginContainer} />

        <Route
          path="/login"
          component={Login} />

        <Route
          path="/home"
          component={Dashboard} />

        <Route
          path="/customer-check-in"
          component={CustomerCheckIn} />
      </Switch>
    </BrowserRouter>
    </div> );
}
 
export default Routes;