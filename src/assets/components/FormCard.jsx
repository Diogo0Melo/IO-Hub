import PropTypes from "prop-types";
import "../styles/SignCard.css";
import SignupInputs from "./SignupInputs";
import { Link } from "react-router-dom";
import SigninInputs from "./SigninInputs";
// import Select from "./Select";
import CategoryInputs from "./CategoryInputs";
import GameInputs from "./GameInputs";

function FormCard() {
    const page = window.location.pathname;
    const returnComponent = () =>
        (page === "/signup" && (
            <>
                <h2>Cadastre-se</h2>
                <SignupInputs page={page} />
                <p>
                    Já possui uma conta? <Link to={"/signin"}>Entrar</Link>
                </p>
            </>
        )) ||
        (page === "/signin" && (
            <>
                <h2>Entrar</h2>
                <SigninInputs page={page} />
                <p>
                    Não possui uma conta?{" "}
                    <Link to={"/signup"}>Cadastre-se</Link>
                </p>
            </>
        )) ||
        (page === "/category" && (
            <>
                <h2>Categorias</h2>
                <CategoryInputs page={page} />

                <p>
                    <Link to={"/game"}>Adicionar um Jogo</Link>
                </p>
            </>
        )) ||
        (page === "/game" && (
            <>
                <h2>Jogos</h2>
                <GameInputs page={page} />
                <p>
                    <Link to={"/category"}>Adicionar uma Categoria</Link>
                </p>
            </>
        ));

    return <form className="sign-card">{returnComponent()}</form>;
}
FormCard.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string,
};
export default FormCard;
