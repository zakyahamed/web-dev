import { Component } from "react";

class Navbar extends Component {
  state = { clicked: false };

  componentDidMount() {
    // Add a click event listener to the entire document
    document.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    // Remove the click event listener when the component unmounts
    document.removeEventListener("click", this.handleOutsideClick);
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleOutsideClick = (event) => {
    // Check if the click is outside the menu and the menu is open
    if (
      this.state.clicked &&
      !document.getElementById("navbar").contains(event.target) &&
      !document.getElementById("mobile").contains(event.target)
    ) {
      this.setState({ clicked: false });
    }
  };

  render() {
    return (
      <>
        <nav>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <div
            id="navbar"
            className={this.state.clicked ? "navbar active" : "navbar"}
          >
            <button className="btn">Login</button>
            <button
              className="btn"
              style={{ background: "white", color: "black" }}
            >
              Sign in
            </button>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
