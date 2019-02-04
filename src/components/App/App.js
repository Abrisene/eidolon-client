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

import { ViewAuth, ViewRecover, ViewStore } from '../Views';
import { Container, Navbar, Button } from '../Bootstrap';
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
// const Store = () => <span>Store</span>
const Admin = () => <span>Admin</span>

class App extends Component {
  render() {
    return (
      <Query query={queries.Q_APP_CONFIG}>
        {({ loading, error, data }) => {
          // console.log(data);
          if (loading) return <Layout />
          if (error) return <Layout />
          const { appConfig, currentUser } = data;
          console.log(data);
          return <Layout config={appConfig} keys={appConfig.keys} user={currentUser} />
        }}
      </Query>
    );
  };
};

const AppNavbar = ({ children, title, logo, navLinks, user }) => {
  const filterLinks = navLinks.filter((l) => {
    const authValid = !l.visible || (user && l.visible === 'auth') || (!user && l.visible === 'noauth');
    let roleValid = false;
    if (user) roleValid = !l.roles || l.roles.reduce((valid, role) => (valid || user.roles.includes(role)), false);

    return authValid && roleValid;
  });
  return (
    <Navbar dark fixed logo={logo} title={title} navLinks={filterLinks} >
      {children}
    </Navbar>
  );
};

const NavAuth = ({ user }) => {
  return (
    <div>
      <AuthVisible user={user} hide>
        <Button className="mr-2" link to='/login'>Sign In</Button>
        <Button outline warning to='/register'>Register</Button>
      </AuthVisible>
      <AuthVisible user={user}>
        <ButtonLogout />
      </AuthVisible>
    </div>
  );
};

const ButtonLogout = (children, ...props) => {
  return (
    <Mutation mutation={queries.M_USER_LOGOUT} refetchQueries={[{ query: queries.Q_USER_CURRENT }]}>
      {(userLogout, _) => {
        return (
          <Button onClick={() => userLogout()} outline danger {...props}>
            {props.children ? { children } : 'Logout'}
          </Button>
        )
      }}
    </Mutation>
  );
};

const Layout = ({ config = null, user = null, keys = null }) => {
  const title = config ? config.name : undefined;
  return (
    <div className="app--layout">
      <AppNavbar title={title} logo={logo} config={config} user={user} navLinks={links}>
        <NavAuth user={user} />
      </AppNavbar>
      <main id="app--main" className="app--main">
        <Routes config={config} user={user} keys={keys} />
      </main>
    </div>
  );
};

const Routes = ({ config = null, user = null, keys = null }) => {
  return (
    <div>
      <Route path="/" component={Home} exact />
      <AuthVisible user={user} hide>
        <Route path="/about" component={About} />
        <Route path="/login" render={() => <ViewAuth type="login" keys={keys} />} />
        <Route path="/register" render={() => <ViewAuth type="register" keys={keys} />} />
        <Route path="/recover" render={() => <ViewRecover />} />
      </AuthVisible>
      <AuthVisible user={user}>
        <Route path="/profile" component={Profile} />
        <Route path="/store" render={() => <ViewStore config={config} />} />
      </AuthVisible>
      <AuthVisible user={user} roles="admin">
        <Route path="/admin" component={Admin} />
      </AuthVisible>
    </div>
  );
};

/**
 # Module Exports
 */

export default App;
