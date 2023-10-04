import Navbar from "./components/Navbar";
import Menubar from "./components/Menubar";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  handleNavbarClick = (clicked) => {
    this.setState({ clicked });
  };

  render() {
    return (
      <div>
        <Navbar onNavbarClick={this.handleNavbarClick} />
        <Menubar isMenuOpen={this.state.clicked} />
      </div>
    );
  }
}
