import { Link } from "react-router-dom";
import gear from "../img/gear-svgrepo-com.svg";
import "../styles/Header.css";
import Logo from "./Logo";
import Select from "./Select";
import Input from "./Input";
import image from "../img/close-svgrepo-com.svg";
import PropTypes from "prop-types";
function Header(props) {
    const page = window.location.pathname;

    const isLogged = (arg) => {
        if (
            sessionStorage.getItem("_token") &&
            sessionStorage.getItem("_userID")
        ) {
            if (arg == "searchButton") {
                return (
                    <>
                        <Link to="/search">
                            <button className="button">Pesquisar</button>
                        </Link>
                        <Link to="/recomendations">
                            <button className="button" disabled>
                                Recomendar
                            </button>
                        </Link>
                    </>
                );
            }
            return (
                <div className="button-container">
                    <Link to="/settings" id="gear-container">
                        <img src={gear} />
                    </Link>
                    <Link
                        to="/signin"
                        id="signup-button"
                        onClick={() => {
                            sessionStorage.clear();
                        }}
                    >
                        <button className="button red-button">Sair</button>
                    </Link>
                </div>
            );
        }
        if (arg == "searchButton") return;
        return (
            <div className="button-container">
                <Link to="/signin" id="login-button">
                    <button className="button">Entrar</button>
                </Link>
                <Link to="/signup" id="signup-button">
                    <button className="button">Cadastrar-se</button>
                </Link>
            </div>
        );
    };
    const returnSearchMethods = () => {
        return (
            <>
                <Input
                    type="text"
                    className="input"
                    id="search"
                    setState={props.setState}
                    value={props.state.search}
                    onInput={props.onInput}
                    placeholder="Procurar Jogo Por Nome"
                />
                <Select
                    page={page}
                    className={"select"}
                    id={"category"}
                    setState={props.setState}
                    value={props.state.category}
                    onChange={props.onChange}
                    disabledOption={"Filtrar Por Categoria"}
                />
                <img
                    src={image}
                    alt=""
                    style={{ cursor: "pointer" }}
                    height={"30px"}
                    onClick={props.onClick}
                />
            </>
        );
    };
    return (
        <div id="header">
            <Logo />
            <div className="button-container">
                {page == "/search"
                    ? returnSearchMethods()
                    : isLogged("searchButton")}
            </div>
            {isLogged()}
        </div>
    );
}
Header.propTypes = {
    state: PropTypes.object,
    setState: PropTypes.func,
    onInput: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
};
export default Header;
