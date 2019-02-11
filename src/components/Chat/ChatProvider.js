/*
 # ChatProvider.js
 # Chat Provider HOC
 */

/**
 # Module Imports
 */

import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

/**
 # Component
 */

class ChatProvider extends Component {
  /* static contextTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    users: PropTypes.array,
    sendMessage: PropTypes.func.isRequired,
  } */

  static childContextTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    users: PropTypes.array,
    sendMessage: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const { messages, users } = this.props;

    this.state = {
      messages: messages || [],
      users: users || [],
    };

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(message) {
    const { user } = this.props;
    const name = user.emails[0];
    const ts = Date.now();
    console.log('SENDMESSAGE');
    console.log(message);
    this.setState({
      messages: [...this.state.messages, { user: name, ts, message }],
    });
  }

  getChildContext() {
    const { messages = [], users = [] } = this.state;
    const sendMessage = this.sendMessage.bind(this);
    return { messages, users, sendMessage };
  }

  render() {
    const { children } = this.props;
    return <div>{ children }</div>;
  }
}

/**
 # Module Exports
 */

export default ChatProvider;
