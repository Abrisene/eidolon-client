/*
 # App.js
 # React Component Index
 */

/**
 # Module Imports
 */

import React, { Suspense } from 'react';
import { Route } from "react-router-dom";
import { useQuery } from 'react-apollo-hooks';

import queries from '../../queries';

import { ViewAuth, ViewRecover, ViewStore, ViewChat, ViewStudio } from '../Views';
import { AuthVisible } from '../Auth';

import AppNavbar from './AppNavbar';
import AppSidebar from './AppSidebar';

// import { Sidebar } from '../Layouts';

import logo from './app.logo.dark.png';

/**
 # Constants
 */

const links = [
  { to: '/about', name: 'About', visible: 'noauth' },
  { to: '/profile', name: 'Profile', visible: 'auth' },
  { to: '/store', name: 'Store', visible: 'auth' },
  { to: '/chat', name: 'Chat', visible: 'auth' },
  { to: '/studio', name: 'Studio', roles: ['admin'] },
  { to: '/admin', name: 'Admin', roles: ['admin'] }
];

/**
 # Mock Components
 */

const Home = () => <span>Home</span>
const About = () => <span>About</span>
const Profile = () => <span>Profile</span>
const Admin = () => <span>Admin</span>

/**
 # Component
 */

const App = () => {
  const { data, error } = useQuery(queries.Q_APP_CONFIG);
  if (error) return <div>{`Error: ${error.message}`}</div>
  const { config, user } = data;
  const title = config ? config.name : undefined;
  return (
    <div className="app--layout">
      <AppNavbar title={title} logo={logo} config={config} user={user} navLinks={links}>
      </AppNavbar>
      {/* <AppSidebar navLinks={links} /> */}
      <main id="app--main" className="app--main">
        <Suspense fallback={<ViewStudio />}>
          <Routes config={config} user={user} keys={config.keys} />
        </Suspense>
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
        <Route path="/chat" render={() => <ViewChat config={config} user={user} />} />
      </AuthVisible>
      <AuthVisible user={user} roles="admin">
        <Route path="/studio" render={() => <ViewStudio config={config} user={user} />} />
        <Route path="/admin" component={Admin} />
      </AuthVisible>
    </div>
  );
};

/**
 # Module Exports
 */

export default App;
