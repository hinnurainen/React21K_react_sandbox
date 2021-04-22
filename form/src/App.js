import React, { Component } from 'react';
import Form from "./Components/Form";
import View from "./Components/View";
import Popup from "./Components/Popup";
import NotesList from "./Components/NotesList";

class App extends Component {
  state = {
    notes: [],
    inputData: {
      firstname: "",
      lastname: "",
      number: "",
      role: "",
      message: "",
    },
    showPopup: false,
  };

  componentDidMount() {
    fetch("http://localhost:3001/notes")
      .then(resp => resp.json())
      .then((data) => this.setState({ notes: data }));
  }

  changeHandler = (event) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value
      },
    });
  };

  popupHandler = (event) => {
    this.setState({ showPopup: true });
    event.preventDefault();
  };

  sendDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.inputData)
    };
    fetch("http://localhost:3001/notes", requestOptions);
    alert("Your note has been posted", window.location.reload());
  };

  render() {
    return (
      <div>
        <Form change={this.changeHandler} submit={this.popupHandler} />
        <View {...this.state.inputData} />
        <NotesList notes={this.state.notes} />
        {this.state.showPopup &&
          <Popup {...this.state.inputData} submit={this.sendDataHandler}
          />}
      </div>
    );
  }
}

export default App;
