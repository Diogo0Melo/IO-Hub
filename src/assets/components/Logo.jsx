import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";
import PropTypes from "prop-types";
function Logo(props) {
    return (
        <Link to="/" id="logo-container">
            <img src={logo} style={props.style} />
            <h1>IO Hub</h1>
        </Link>
    );
}
Logo.propTypes = {
    style: PropTypes.object,
};
export default Logo;
