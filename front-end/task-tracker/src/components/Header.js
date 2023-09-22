import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={{ color: "red", backgroundColor: "Black" }}>{title}</h1>
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
