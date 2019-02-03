/*
 # App.js
 # React Component Index
 */

/**
 # Module Imports
 */

import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Query, Mutation } from "react-apollo";

import queries from '../../queries';

import { ViewAuth, ViewRecover } from '../Views';
import { Navbar, Button } from '../Bootstrap';
import { AuthVisible } from '../Auth';

import logo from './logo.svg';
import './App.css';

// console.log(queries);

/**
 # Component
 */

const links = [
  { to: '/about', name: 'About', visible: 'noauth' },
  { to: '/profile', name: 'Profile', visible: 'auth' },
  { to: '/store', name: 'Store', visible: 'auth' },
  { to: '/admin', name: 'Admin', roles: ['admin'] }
];

const Home = () => <span>Home</span>
const Profile = () => <span>Profile</span>
const About = () => <span>About</span>
const Store = () => <span>Store</span>
const Admin = () => <span>Admin</span>

class App extends Component {
  render() {
    return (
      <ConfigHOC />
    );
  };
};

const ConfigHOC = (props) => {
  return (
    <Query query={queries.Q_APP_CONFIG}>
      {({ loading, error, data }) => {
        console.log(data);
        if (loading) return <Layout />
        if (error) return <Layout />
        return <Layout config={data.appConfig} user={data.currentUser} />
      }}
    </Query>
  );
};

const AppNavbar = ({ children, title, logo, navLinks, user }) => {
  const filterLinks = navLinks.filter(l => user ? (l.visible === 'auth' || l.roles !== undefined) : (l.visible === 'noauth' || (!l.visible && !l.roles)));
  return (
    <Navbar dark fixed logo={logo} title={title} navLinks={filterLinks} >
      {children}
    </Navbar>
  );
};

const Layout = ({ config, user = null }) => {
  const title = config ? config.name : undefined;
  return (
    <div className="app--layout">
      <AppNavbar title={title} logo={logo} config={config} user={user} navLinks={links}>
        <AuthVisible user={user} hide>
          <Button className="mr-2" link to='/login'>Sign In</Button>
          <Button outline warning to='/register'>Register</Button>
        </AuthVisible>
        <AuthVisible user={user}>
          <Mutation
            mutation={queries.M_USER_LOGOUT}
            refetchQueries={[{ query: queries.Q_USER_CURRENT }]}
          >
            {
              (userLogout, _) => <Button onClick={() => userLogout()} outline danger>Logout</Button>
            }
          </Mutation>
        </AuthVisible>
      </AppNavbar>
      <main id="app--main" className="app--main">
        <div className="container">
          {user ? user.emails[0] : null}
          <Route path="/" component={Home} exact />
          <AuthVisible user={user} hide>
            <Route path="/about" component={About} />
            <Route path="/login" render={() => <ViewAuth type="login" config={config} />} />
            <Route path="/register" render={() => <ViewAuth type="register" config={config} />} />
            <Route path="/recover" render={() => <ViewRecover type="register" config={config} />} />
          </AuthVisible>
          <AuthVisible user={user}>
            <Route path="/profile" component={Profile} />
            <Route path="/store" component={Store} />
          </AuthVisible>
          <AuthVisible user={user}>
            <Route path="/admin" component={Admin} />
          </AuthVisible>
        </div>
      </main>
    </div>
  );
};

/**
 # Module Exports
 */

export default App;
