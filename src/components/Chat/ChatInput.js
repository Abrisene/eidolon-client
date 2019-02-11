/*
 # ChatInput.js
 # Chat Input Component
 */

/**
 # Module Imports
 */

import React, { Component } from 'react';

import withChat from './withChat';
import { Input, Button } from '../Bootstrap';

import './Chat.scss';
/**
 # Component
 */

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      message: '',
    };
  }

  handleChange(value) {
    this.setState(() => ({ message: value }));
  }

  handleSubmit(e) {
    const { onSubmit, sendMessage } = this.props;
    e.preventDefault();
    if (this.state.message.trim() !== '') {
      this.setState(() => {
        if (onSubmit) onSubmit(this.state.message);
        if (sendMessage) sendMessage(this.state.message);
        return { message: '' };
      });
    }
  }

  render() {
    const { children } = this.props;
    // console.log(this.props);
    return (
      <form className="c--chat-input">
        <Input
          id="f--chat-message"
          placeholder="Message..."
          // type="textarea"
          value={this.state.message}
          rows={5}
          onChange={(v) => this.handleChange(v)}
        />
        <Button
          className="invisible"
          onSubmit={(e) => this.handleSubmit(e)}
        />
      </form>
    );
  }
}

/**
 # Module Exports
 */

export default withChat(ChatInput);
