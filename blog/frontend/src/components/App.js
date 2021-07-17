import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Alerts from './layout/Alerts';
import {Provider} from  'react-redux';
import Dashboard from './Post/Dashboard';
import PrivateRoute from './common/PrivateRoute';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Main from './home/Main';
import store  from '../store';
import Login from './accounts/Login';
import Register from './accounts/Register';
import { loadUser } from '../actions/auth';
import Edit from './Post/Edit';
 

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
              <Switch>
                  <Route exact path="/" component={Main}></Route>
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/edit/:id" component={Edit} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
            </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));