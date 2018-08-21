import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Display.css';

class Display extends Component {
  render() {
    return (
      <div className="Coponent-Display">
            <div>
                {this.props.value}
            </div>  
      </div>

    );
  }
}

Display.PropTypes ={value: PropTypes.string}
export default Display;
