import React, { Component } from 'react';
import ButtonPanel from './component/ButtonPanel';
import Display from './component/Display';
import Nav from './component/Nav';
import calculate from './Calculate';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
    
  };
  render() {
    return (
      <div className="Coponent-App">
            <Nav />
            <section>
                <Display value={this.state.next || this.state.total || "0"} />
                <ButtonPanel clickHandler={this.handleClick} />   
            </section>
      </div>

    );
  }
}

export default App;
