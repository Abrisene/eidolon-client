/*
 # App.js
 # React Component Index
 */

/**
 # Module Imports
 */

import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Query } from "react-apollo";

import queries from '../../queries';

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
const Login = () => <span>Login</span>
const Register = () => <span>Register</span>

class App extends Component {
  render() {
    return (
      <ConfigHOC logo={logo} />
    );
  };
};

const ConfigHOC = (props) => {
  return (
    <Query query={queries.Q_APP_CONFIG}>
      {({ loading, error, data }) => {
        console.log(loading, error, data);
        if (loading) return <Layout title="x" logo={logo} />
        if (error) return <Layout title="x" logo={logo} />
        return <Layout title={data.appConfig.name || 'x'} logo={logo} config={data.appConfig} user={data.currentUser} />
      }}
    </Query>
  );
};

const AppNavbar = ({ children, title, logo, navLinks, config, user }) => {
  const filterLinks = navLinks.filter(l => user ? (l.visible === 'auth' || l.roles !== undefined) : (l.visible === 'noauth' || (!l.visible && !l.roles)));
  return (
    <Navbar dark fixed logo={logo} title={title} navLinks={filterLinks} >
      {children}
    </Navbar>
  );
};

const Layout = ({ title, logo, config, user }) => {
  return (
    <div className="layout">
      <AppNavbar title={title} logo={logo} config={config} user={user} navLinks={links}>
        <AuthVisible hide>
          <Button className="mr-2" link to='/login'>Log In</Button>
          <Button outline warning to='/register'>Register</Button>
        </AuthVisible>
      </AppNavbar>
      <main>
        <div className="container">
          <Route path="/" component={Home} exact />
          <AuthVisible hide>
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </AuthVisible>
          <AuthVisible>
            <Route path="/profile" component={Profile} />
            <Route path="/store" component={Store} />
          </AuthVisible>
          <AuthVisible>
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
