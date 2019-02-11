/*
 # withChat.js
 # Chat Provider HOC
 */

/**
 # Module Imports
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 # Component
 */

const withChat = WrapComponent => {
  return class ChatComponent extends Component {

    static contextTypes = {
      messages: PropTypes.arrayOf(PropTypes.object).isRequired,
      users: PropTypes.array,
      sendMessage: PropTypes.func.isRequired,
    }

    render() {
      return <WrapComponent {...this.props} {...this.context} />
    }
  }
}

/**
 # Module Exports
 */

export default withChat;
