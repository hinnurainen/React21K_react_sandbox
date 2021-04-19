import React, { Component } from 'react';
import Form from "./Components/Form";
import View from "./Components/View";
import Popup from "./Components/Popup";
import NotesList from "./Components/NotesList";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    number: "",
    role: "",
    message: "",
    showPopup: false,
    notes: [],
  };

  componentDidMount() {
    fetch('http://localhost:3001/notes')
      .then(resp => resp.json())
      .then((data) => this.setState({ notes: data }));
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  popupHandler = (event) => {
    this.setState({ showPopup: true });
    event.preventDefault();
  };

  render() {
    const props = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      number: this.state.number,
      role: this.state.role,
      message: this.state.message,
    }
    return (
      <div>
        <Form change={this.changeHandler} submit={this.popupHandler} />
        <View {...props} />
        <NotesList notes={this.state.notes} />
        {this.state.showPopup &&
          <Popup {...props}
          />}
      </div>
    );
  }
}

export default App;
