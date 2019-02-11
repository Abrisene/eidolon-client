/*
 # ChatView.js
 # Checkout View Component
 */

/**
 # Module Imports
 */

import React, { Component } from 'react';

import ScrollableFeed from 'react-scrollable-feed'

import withChat from './withChat';
import { Input } from '../Bootstrap';

import './Chat.scss';
/**
 # Component
 */

class ChatWindow extends Component {
  constructor(props) {
    super(props);

    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom() {
    if (this.lastMessage) this.lastMessage.scrollIntoView({ behavior: 'smooth' });
  }

  /* componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  } */

  render() {
    const { messages = [] } = this.props;
    // console.log(this.lastMessage);
    console.log(this.refs);
    return (
      <div className="c--chat-window">
        <ul>
          <ScrollableFeed>
            {messages.map((m, i) => <li key={i} /* ref={(el) => { if (i === messages.length - 1) this.lastMessage = el }} */>{`${m.user}: ${m.message}`}</li>)}
          </ScrollableFeed>
        </ul>
        <div style={{ float: "left", clear: "both" }} ref={(el) => { this.lastMessage = el; }} />
      </div>
    );
  }
}

/**
 # Module Exports
 */

export default withChat(ChatWindow);
