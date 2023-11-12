import "../styles/Ratings.css";
import React from "react";
import star from "../img/star-gold-orange-svgrepo-com.svg";
import PropTypes from "prop-types";
class Ratings extends React.Component {
    static propTypes = {
        userRating: PropTypes.object,
    };
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            data: [],
        };
    }
    async componentDidMount() {
        console.log("mounted");
        const page = window.location.pathname;
        const split = page.split("/");
        const response = await fetch(
            `https://back-end-frameworkk.vercel.app/games/${split[2]}/ratings`
        );
        const data = await response.json();
        this.setState({
            loaded: true,
            data,
        });
        return data;
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
            console.log(this.props.userRating);
            if (this.props.userRating) {
                return (
                    <div
                        key={this.props.userRating.user._id}
                        className="rating-container"
                    >
                        <h3>Úsuario: {this.props.userRating.user.name}</h3>
                        <h3>{returnStars()}</h3>
                        <p>{this.props.userRating.description}</p>
                    </div>
                );
            }
            return this.state.loaded ? returnRatings() : "Carregando...";
        };
        return <> {returnUserOrAllRatings()} </>;
    }
}
export default Ratings;
