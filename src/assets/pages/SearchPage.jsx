import FixedButton from "../components/FixedButton";
import Footer from "../components/Footer";
import GameCardsContainer from "../components/GameCardsContainer";
import Header from "../components/Header";
import { useState } from "react";
import "../styles/SearchPage.css";
function SearchPage() {
    const userInputs = {
        search: "",
        category: "",
    };
    const [state, setState] = useState(userInputs);
    const onInput = async (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({ ...prevState, [id]: value }));
        console.log(state);
    };
    const onChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({ ...prevState, [id]: value }));
    };
    const onClick = () => {
        setState({ search: "", category: "" });
    };
    return (
        <>
            <Header
                state={state}
                setState={setState}
                onInput={onInput}
                onChange={onChange}
                onClick={onClick}
            />
            <GameCardsContainer
                state={state}
                title={"Todos os Jogos Cadastrados"}
                className="game-cards-container-search-page"
            />
            <FixedButton />
            <Footer />
        </>
    );
}
export default SearchPage;
