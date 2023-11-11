import "../styles/GameContainer.css";
import star from "../img/star-gold-orange-svgrepo-com.svg";
import getGameAPI from "../js/getGameAPI";
import React from "react";

import RatingsContainer from "./RatingsContainer";
class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: undefined,
            ratings: undefined,
        };
    }
    async componentDidMount() {
        const page = window.location.pathname;
        const split = window.location.pathname.split("/");
        const response = await fetch(
            `https://back-end-frameworkk.vercel.app/games/${split[2]}/ratings`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();

        this.setState({ ratings: data });
        await getGameAPI(page).then((game) => this.setState({ game }));
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
            <>
                <div
                    className="game-container-back-image"
                    style={{
                        backgroundImage: `url(${this.state.game?.imageURL})`,
                    }}
                >
                    <div className="game-container-outside ">
                        <div className="game-container-inside  ">
                            <div className="space-between">
                                <div>
                                    <div
                                        className="img"
                                        style={{
                                            backgroundImage: `url(${this.state.game?.imageURL})`,
                                        }}
                                    />
                                    <div className="game-infos">
                                        <div>
                                            {this.state.ratings
                                                ? this.returnStars()
                                                : "Carregando..."}
                                        </div>
                                        <h2>{this.state.game?.name}</h2>
                                        <div className="category-container">
                                            <h3 className="category">
                                                {this.state.game?.category.name}
                                            </h3>
                                        </div>
                                        <p>{this.state.game?.description}</p>
                                    </div>
                                </div>
                                <div className="video-responsive">
                                    <iframe
                                        width="430"
                                        height="235"
                                        src={this.state.game?.videoURL}
                                        frameBorder="0"
                                        style={{ backgroundColor: "gray" }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                                </div>
                            </div>
                            <div id="div-button-container">
                                <a
                                    href={this.state.game?.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="button">Jogar</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-container-outside relative">
                    <div className="game-container-inside">
                        <RatingsContainer />
                    </div>
                </div>
            </>
        );
    }
}
export default GameContainer;
