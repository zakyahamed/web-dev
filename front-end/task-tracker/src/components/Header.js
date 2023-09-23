import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          onClick={onAdd}
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
        />
      )}
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
