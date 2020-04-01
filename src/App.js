import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    textInput: "",
    userInput: []
  };

  changeHandler = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const previousInput = this.state.textInput;
    this.setState({
      textInput: "",
      userInput: [...this.state.userInput, previousInput]
    });
  };

  render () {
    return (
    <div className="App">
      <form onSubmit={this.submitHandler}>
        <label>
          Github Profile Picture Finder
          <input
            type="text"
            value={this.state.textInput}
            placeholder="Enter Profile Name"
            onChange={this.changeHandler}
          />
        </label>
        <button type="submit">SEND IT!</button>
      </form>
    <p>{this.state.textInput}</p>
    </div>
  );}
}

export default App;
