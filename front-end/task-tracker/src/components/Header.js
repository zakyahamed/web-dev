import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Hello");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} color="green" text="Hello" />
    </header>
  );
};

Header.defaultProps = {
  title: "Title tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

/*
//CSS in JS
const headingStyle = {
  color: "red",
  backgroundColor: "Black",
};
*/

export default Header;
