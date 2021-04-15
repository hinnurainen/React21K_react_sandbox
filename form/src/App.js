import React, { Component } from 'react';
import Form from "./Components/Form";
import View from "./Components/View";
import Popup from "./Components/Popup";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    number: "",
    role: "",
    message: "",
    showPopup = false,
  };

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  popupHandler = (event) => {
    event.preventDefault();
    this.state.showPopup = true,
  };

  render() {
    return (
      <div>
        <Form typed={this.inputHandler} />
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          number={this.state.number}
          role={this.state.role}
          message={this.state.message}
        />
        <Popup popup={this.popupHandler} />
      </div>
    );
  }
}

export default App;
