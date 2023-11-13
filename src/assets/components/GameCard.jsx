import "../styles/GameCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import star from "../img/star-gold-orange-svgrepo-com.svg";
import React from "react";

class GameCard extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
        score: PropTypes.number,
    };
    constructor(props) {
        super(props);
    }
    returnStars() {
        const starsArray = [];
        const score = this.props.score.toPrecision(1);

        for (let i = 0; i < +score; i++) {
            starsArray.push(<img src={star} className="star" />);
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
                    <h3>{this.returnStars()}</h3>
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

export default GameCard;
