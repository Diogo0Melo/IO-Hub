import "../styles/Ratings.css";
import React from "react";
import star from "../img/star-gold-orange-svgrepo-com.svg";

class Ratings extends React.Component {
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
    // async componentDidUpdate() {
    //     console.log("updated");
    //     const page = window.location.pathname;
    //     const split = page.split("/");
    //     const response = await fetch(
    //         `https://back-end-frameworkk.vercel.app/games/${split[2]}/ratings`
    //     );
    //     const data = await response.json();
    // }

    render() {
        const { data } = this.state;
        const returnStars = () => {
            const a = [];
            data.forEach((game) => {
                for (let i = 0; i < +game.score; i++) {
                    a.push(<img src={star} key={undefined} className="star" />);
                }
            });
            return a.map((el) => el);
        };
        const returnRatings = () => {
            return data.map((game) => {
                return (
                    <div key={game._id} className="rating-container">
                        <h3>Úsuario: {game.user.name}</h3>
                        <h3>{returnStars()}</h3>
                        <p>{game.description}</p>
                    </div>
                );
            });
        };
        return <> {this.state.loaded ? returnRatings() : "Carregando..."} </>;
    }
}
export default Ratings;
