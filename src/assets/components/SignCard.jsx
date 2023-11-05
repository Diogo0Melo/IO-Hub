import PropTypes from "prop-types";
import "../styles/SignCard.css";
import SignupInputs from "./SignupInputs";
import { Link } from "react-router-dom";
import SigninInputs from "./SigninInputs";
// import Select from "./Select";

function SignCard() {
    const page = window.location.pathname;
    const returnComponent = () =>
        (page === "/signup" && (
            <>
                <SignupInputs page={page} />
                <p>
                    Já possui uma conta? <Link to={"/signin"}>Entrar</Link>
                </p>
            </>
        )) || (
            <>
                <SigninInputs page={page} />
                <p>
                    Não possui uma conta?{" "}
                    <Link to={"/signup"}>Cadastre-se</Link>
                </p>
            </>
        );

    return (
        <form method="POST" className="sign-card">
            <h2>{page === "/signup" ? "Cadastre-se" : "Entrar"}</h2>
            {returnComponent()}
        </form>
    );
}
SignCard.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string,
};
export default SignCard;
