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
 # Utility Components
 */

const InputType = ({ children, type, ...props }) => {
  let result;

  switch (type) {
    case 'textarea':
      result = <textarea {...props}>{children}</textarea>
      break;
    default:
      result = <input {...props}>{children}</input>;
      break;
  }

  return result;
};


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
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValidate(value) {
    const { onValidate } = this.props;
    return onValidate ? onValidate(value) : value;
  }

  handleKeypress(event, type) {
    const { onKeyDown, onKeyUp } = this.props;
    // const inputType = this.props.type;
    const callback = type === 'KeyDown' ? onKeyDown : onKeyUp;
    if (callback) callback(event);
    /* if (type === 'KeyDown') {
      // If we have input and press shift + enter, add a newline.
      if (event.keyCode === 13 && event.shiftKey) {
        this.setState({ value: this.state.value + '\n' });
      }
    } */
  }

  handleChange(event) {
    const { onChange } = this.props;
    let value = event.target.value;

    // Validate if we have a validation method defined.
    if (this.props.validate || this.props.onValidate) value = this.handleValidate(value);

    // If we're controlling value from parent, hit onchange direct, otherwise update local state.
    if (this.props.value !== undefined && onChange) {
      onChange(value);
    } else {
      this.setState(() => {
        if (onChange) onChange(value);
        return { value };
      });
    }
  }

  handleSubmit(event) {
    const { onSubmit, value } = this.props;
    console.log('submit');
    event.preventDefault();
    const v = value !== undefined ? value : this.state.value;
    if (onSubmit) onSubmit(v);
  }

  render() {
    const { id, type, value, defaultValue, label, placeholder, help, rows } = this.props;
    const v = value !== undefined ? value : this.state.value;
    let classes = 'form-control';
    if (this.props.className) classes += 'hidden';
    if (this.props.className) classes += ` ${this.props.className}`;
    return (
      <div className="form-group">
        { label ? <label htmlFor={id}>{label}</label> : null }
        <InputType
          type={type}
          className={classes}
          placeholder={placeholder}
          aria-describedby={help ? `${id}-help` : undefined }
          defaultValue={defaultValue}
          value={v}
          onChange={this.handleChange}
          onKeyDown={(event) => this.handleKeypress(event, 'KeyDown')}
          onKeyUp={(event) => this.handleKeypress(event, 'KeyUp')}
          rows={rows}
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
