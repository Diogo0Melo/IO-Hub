import "../styles/GameContainer.css";
import star from "../img/star-gold-orange-svgrepo-com.svg";
import getGameAPI from "../js/getGameAPI";
import React from "react";

import RatingsContainer from "./RatingsContainer";
import getRatingsAPI from "../js/getRatingsAPI";
class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: undefined,
            ratings: undefined,
            ratingStatus: "not-rated",
        };
        this.setState = this.setState.bind(this);
    }
    async componentDidMount() {
        console.log(this.state);
        const page = window.location.pathname;
        const gameID = page.split("/")[2];
        const ratings = await getRatingsAPI(gameID);
        const game = await getGameAPI(page);
        this.setState({
            game,
            ratings,
        });
        console.log(this.state);
    }
    async shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state);
        if (
            (this.state.ratingStatus === "editing" &&
                nextState.ratingStatus === "rated") ||
            (this.state.ratingStatus === "not-rated" &&
                nextState.ratingStatus === "rated")
        ) {
            const gameID = window.location.pathname.split("/")[2];
            const ratings = await getRatingsAPI(gameID);
            this.setState({
                ratings,
            });
            return true;
        }
        return false;
    }
    returnStars() {
        const starsArray = [];

        const score = this.state.game.score?.toPrecision(1);

        for (let i = 0; i < +score; i++) {
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
                                            {this.state.game !== undefined
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
                        <RatingsContainer
                            ratings={this.state.ratings}
                            ratingStatus={this.state.ratingStatus}
                            setState={this.setState}
                            // reload={[this.state.reload, this.setState]}
                        />
                    </div>
                </div>
            </>
        );
    }
}
export default GameContainer;
