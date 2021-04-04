import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "./App.css";


class App extends Component {
  state = {
    counter: 0,
  }

  addHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  removeHandler = () => {
    if (this.state.counter !== 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  resetHandler = () => {
    this.setState({
      counter: 0,
    })
  }

  render() {
    let appStyle = "appstyle";
    let circleClass = `${this.state.counter === 0 ? "" : this.state.counter % 2 === 0 ? "even" : "odd"} circle`;
    return (
      <div>
        <Header />
        <section className={appStyle}>
          <h1 className={circleClass}>{this.state.counter}</h1>
        </section>
        <button onClick={this.addHandler}>Add one</button>
        <button onClick={this.removeHandler}>Remove one</button>
        <button onClick={this.resetHandler}>Reset</button>
        <Footer />
      </div>
    );
  }
}

export default App;

/*
import './App.css';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";



const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
*/