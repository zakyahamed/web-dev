import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked }, () => {
      // Call the callback function passed from the parent component
      this.props.onNavbarClick(this.state.clicked);
    });
  };

  render() {
    return (
      <nav>
        <div class="dropdown">
          <button
            class="fas fa-bars"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={this.handleClick}
          ></button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">
              Action
            </button>
            <button class="dropdown-item" type="button">
              Another action
            </button>
            <button class="dropdown-item" type="button">
              Something else here
            </button>
          </div>
        </div>
        <div id="navbar" className="navbar">
          <button className="btn">Login</button>
          <button
            className="btn"
            style={{ background: "white", color: "black" }}
          >
            Sign Up
          </button>
        </div>
      </nav>
    );
  }
}
