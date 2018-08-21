import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Button.css';



class Button extends Component {
    handleClick = () => {
        this.props.clickHandler(this.props.name);
      };
  render() {
    const className = [
      "component-button",
      this.props.blue? "blue" : "",
      this.props.wide ? "wide" : "",
    ];
    return (
      <div className={className.join(" ").trim()}>
          <button onClick={this.handleClick}>{this.props.name}</button>
      </div>

    );
  }
}

Button.PropTypes ={name: PropTypes.string, clickHandler: PropTypes.func, blue: PropTypes.bool, wide:PropTypes.bool}
export default Button;
