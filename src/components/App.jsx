import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './App.less';

import { Provider } from 'react-redux'
import store from '../store'

import Navbar from '#/containers/Navbar';
import Footer from '#/containers/Footer';
import AuthSwitch from '#/auth/AuthSwitch';

const NavbarWithRoute = withRouter(props => <Navbar {...props} />);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <NavbarWithRoute />
        <main>
          <AuthSwitch />
        </main>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
