/*
 # Bootstrap/Input.js
 # Bootstrap Input Component
 */

/**
 # Module Imports
 */

import React, { Component } from 'react';
// import './Input.css';

/**
 # Component
 */

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleValidate = this.handleValidate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValidate(value) {
    const { onValidate } = this.props;
    return onValidate ? onValidate(value) : value;
  }

  handleChange(event) {
    const { onChange } = this.props;
    let value = event.target.value;
    if (this.props.validate || this.props.onValidate) value = this.handleValidate(value);
    this.setState(() => {
      if (onChange) onChange(value);
      return { value };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { id, type, label, placeholder, help } = this.props;
    let classes = 'form-control';
    if (this.props.className) classes += ` ${this.props.className}`;
    return (
      <div className="form-group">
        { label ? <label htmlFor={id}>{label}</label> : null }
        <input
          type={type}
          className={classes}
          placeholder={placeholder}
          aria-describedby={help ? `${id}-help` : undefined }
          value={this.state.value}
          onChange={this.handleChange}
        />
        { help ? <small id={`${id}-help`} className="form-text text-muted">{help}</small> : null }
      </div>
    )
  }
}

/**
 # Module Exports
 */

export default Input;
