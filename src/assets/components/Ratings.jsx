import "../styles/Ratings.css";
import React from "react";
import star from "../img/star-gold-orange-svgrepo-com.svg";
import PropTypes from "prop-types";
class Ratings extends React.Component {
    static propTypes = {
        userRating: PropTypes.object,
        onClick: PropTypes.func,
        ratings: PropTypes.array,
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.ratings !== this.props.ratings) {
            this.setState({
                data: this.props.ratings,
            });
            return true;
        }
        return false;
    }

    render() {
        const { data } = this.state;
        const returnStars = (gameScore) => {
            const a = [];
            const userScore = this.props.userRating?.score || gameScore;

            for (let i = 0; i < +userScore; i++) {
                a.push(<img src={star} key={undefined} className="star" />);
            }
            return a.map((el) => el);
        };
        const returnRatings = () => {
            return data.map((game) => {
                return (
                    <div key={game._id} className="rating-container">
                        <h3>Úsuario: {game.user.name}</h3>
                        <h3>{returnStars(game.score)}</h3>
                        <p>{game.description}</p>
                    </div>
                );
            });
        };
        const returnUserOrAllRatings = () => {
            if (this.props.userRating) {
                return (
                    <div
                        key={this.props.userRating.user._id}
                        className="rating-container"
                        onClick={this.props.onClick}
                        style={{ cursor: "pointer" }}
                    >
                        <h3>Úsuario: {this.props.userRating.user.name}</h3>
                        <h3>{returnStars()}</h3>
                        <p>{this.props.userRating.description}</p>
                    </div>
                );
            }
            return this.state.data ? returnRatings() : "Carregando...";
        };
        return <> {returnUserOrAllRatings()} </>;
    }
}

export default Ratings;
