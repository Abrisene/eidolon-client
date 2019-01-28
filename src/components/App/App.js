/*
 # App.tsx
 # React Component Index
 */

/**
 # Module Imports
 */

import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Query } from "react-apollo";
// import gql from "graphql-tag";
import queries from '../../queries';

import { LayoutTopNav } from '../Layouts';

import logo from './logo.svg';
import './App.css';

// console.log(queries);

/**
 # Component
 */

const links = [
  { to: '/profile', name: 'Profile' },
  { to: '/about', name: 'About' },
  { to: '/store', name: 'Store' },
];

const Home = () => <span>Home</span>
const Profile = () => <span>Profile</span>
const About = () => <span>About</span>
const Store = () => <span>Store</span>

class App extends Component /* <{
  logo?: string,
  title?: string,
}>  */{
  render() {
    return (
      <ConfigHOC logo={logo} />
    );
  }
}

const ConfigHOC = (props) => {
  return (
    <Query query={queries.Q_APP_CONFIG}>
      {({ loading, error, data }) => {
        console.log(loading, error, data);
        if (loading) return <Layout title="x" logo={logo} />
        if (error) return <Layout title="x" logo={logo} />
        return <Layout title={data.appConfig.name || 'x'} logo={logo} config={data.appConfig} />
      }}
    </Query>
  );
}

const Layout = (props) => {
  return (
    <LayoutTopNav logo={props.logo} title={props.title} navLinks={links}>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={About} />
      <Route path="/store" component={Store} />
    </LayoutTopNav>
  );
};

/**
 # Module Exports
 */

export default App;
