import "../styles/GameCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import star from "../img/star-gold-orange-svgrepo-com.svg";
import React from "react";

class GameCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: undefined,
            ratings: undefined,
            resposta: undefined,
        };
    }
    async componentDidMount() {
        const response = await fetch(
            `https://back-end-frameworkk.vercel.app/games/${this.props.id}/ratings`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        this.setState({ ratings: data, resposta: true });
    }
    returnStars() {
        const starsArray = [];

        const reduce = this.state.ratings.reduce((a, b) => a + +b.score, 0);
        const media = (reduce / this.state.ratings.length).toPrecision(1);

        for (let i = 0; i < +media; i++) {
            starsArray.push(
                <img src={star} key={undefined} className="star" />
            );
        }

        return starsArray.map((el) => el);
    }
    render() {
        return (
            <Link
                className="game-card space-between"
                to={`/game/${this.props.id}`}
            >
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <h3>
                        {this.state.resposta
                            ? this.returnStars()
                            : "Carregando..."}
                    </h3>
                </div>
                <div
                    className="game-card-image"
                    style={{ backgroundImage: `url(${this.props.image})` }}
                />
                <div style={{ display: "flex", justifyContent: "start" }}>
                    <h3>{this.props.title}</h3>
                </div>
            </Link>
        );
    }
}
GameCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.string,
};
export default GameCard;
