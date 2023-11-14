import GameCard from "./GameCard";
import "../styles/GameCardsContainer.css";
import PropTypes from "prop-types";
import getGamesAPI from "../js/getGamesAPI";
import { useState, useEffect } from "react";

function GameCardsContainer(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        getGamesAPI().then((data) => setData(data));
    }, []);
    const page = window.location.pathname;
    if (props.sort === "score") data.sort((a, b) => b.score - a.score);
    else data.sort((a, b) => a.name.localeCompare(b.name));

    const returnGames = () => {
        const name = props.state?.search.toLowerCase();

        const returnCategory = () => {
            if (!props.state?.category) return;
            const category = JSON.parse(props.state?.category);
            return category.name.toLowerCase();
        };
        const category = returnCategory();
        return data.map((game, index) => {
            const gameName = game.name.toLowerCase();
            const categoryName = game.category.name.toLowerCase();

            if (
                (name && !gameName.includes(name)) ||
                (category && !categoryName.includes(category))
            )
                return;
            if (page !== "/search" && index > 5) return;
            return (
                <GameCard
                    id={game._id}
                    key={game._id}
                    title={game.name}
                    image={game.imageURL}
                    score={game.score}
                />
            );
        });
    };

    return (
        <div className="game-cards-container-outside">
            <div className="game-cards-container-inside">
                <div id="game-cards-container">
                    <h2>{props.title}</h2>
                    <div className={props.className}>{returnGames()}</div>
                </div>
            </div>
        </div>
    );
}
GameCardsContainer.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    state: PropTypes.object,
    sort: PropTypes.string,
};
export default GameCardsContainer;
