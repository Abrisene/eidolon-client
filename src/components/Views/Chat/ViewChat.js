/*
 # ViewChat.js
 # Chat View Component
 */

/**
 # Module Imports
 */

import React from 'react';

import { Container, Button } from '../../Bootstrap';
import { ContainerHero } from '../../Layouts';
import { ChatProvider, ChatInput, ChatWindow } from'../../Chat';

/*
 # Mock Vars
 */

const messages = [];

const addMessage = (message, user) => {
  console.log(message);
  const name = user.emails[0];
  const ts = Date.now();
  messages.push({ user: name, ts, message });
  console.log(messages);
};

/*
 # Component
 */

const ViewChat = ({ id, className, config, user }) => {
  const i = id || `c-view c-view--chat`;
  const classes = className || `c-view--chat`;

  return (
    <div id={i} className={classes}>
      <ContainerHero minHeight="100vh" offsetTop="4.5em" img="https://picsum.photos/g/1000/1600/">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-10 offset-md-1">
              <ChatProvider messages={messages} users={[]} user={user}>
                <ChatWindow />
                <ChatInput />
              </ChatProvider>
            </div>
          </div>
        </div>
      </ContainerHero>
    </div>
  );
};

/**
 # Module Exports
 */

export default ViewChat;
