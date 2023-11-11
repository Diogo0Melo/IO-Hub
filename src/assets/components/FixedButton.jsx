import { Link } from "react-router-dom";
import button from "../img/plus-svgrepo-com.svg";
import "../styles/FixedButton.css";
function FixedButton() {
    const role = sessionStorage.getItem("_roles");
    if (role !== "admin") {
        return;
    }
    return (
        <Link to="/category">
            <img src={button} id="fixed-button" />
        </Link>
    );
}
export default FixedButton;
