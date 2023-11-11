import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Button.css";
class Button extends React.Component {
    api = "https://back-end-frameworkk.vercel.app";
    token = sessionStorage.getItem("_token");
    userID = sessionStorage.getItem("_userID");
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string,
        title: PropTypes.string,
        user: PropTypes.object,
        page: PropTypes.string,
        to: PropTypes.string,
        game: PropTypes.object,
        category: PropTypes.object,
    };
    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
        this.signIn = this.signIn.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.addGame = this.addGame.bind(this);
        this.addRating = this.addRating.bind(this);
    }
    async signUp() {
        const response = await fetch(`${this.api}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.props.user.name,
                email: this.props.user["email-signup"],
                password: this.props.user["password-signup"],
                confirmPassword: this.props.user.confirmPassword,
                birthDate: this.props.user.birthDate,
                country: this.props.user.country,
                state: this.props.user.state,
            }),
        });

        const data = await response.json();
        console.log(data);
        this.signIn(
            this.props.user["email-signup"],
            this.props.user["password-signup"]
        );
    }
    async signIn(email, password) {
        const response = await fetch(`${this.api}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: this.props.user["email-signin"] || email,
                password: this.props.user["password-signin"] || password,
            }),
        });

        const data = await response.json();
        console.log(data);
        sessionStorage.setItem("_token", data.token);
        sessionStorage.setItem("_userID", data._id);
        sessionStorage.setItem("_roles", data.roles);
    }
    async addCategory() {
        const response = await fetch(`${this.api}/categories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.token,
            },
            body: JSON.stringify({
                name: this.props.category.category,
            }),
        });
        const data = await response.json();
        console.log(data);
    }
    async addGame() {
        const category = JSON.parse(this.props.game.category);
        const response = await fetch(`${this.api}/games`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.token,
            },
            body: JSON.stringify({
                name: this.props.game.name,
                category: {
                    _id: category._id,
                },
                description: this.props.game.description,
                url: this.props.game.urlToGame,
                imageURL: this.props.game.urlToImage,
                videoURL: this.props.game.urlToVideo,
            }),
        });
        const data = await response.json();
        console.log(data);
    }
    async addRating() {
        const split = this.props.page.split("/");
        const response = await fetch(`${this.api}/ratings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                score: this.props.user.score,
                description: this.props.user.comment,
                game: split[2],
                user: this.userID,
            }),
        });
        const data = await response.json();
        console.log(data);
    }
    render() {
        const { page } = this.props;
        const split = page.split("/");
        const returnOnClick = () =>
            (this.props.page === "/signup" && this.signUp) ||
            (this.props.page === "/signin" && this.signIn) ||
            (this.props.page === "/category" && this.addCategory) ||
            (this.props.page === "/game" && this.addGame) ||
            (this.props.page === `/game/${split[2]}` && this.addRating);

        return (
            <Link to={this.props.to}>
                <button
                    className={this.props.className}
                    type={this.props.type}
                    onClick={returnOnClick()}
                >
                    {this.props.title}
                </button>
            </Link>
        );
    }
}

export default Button;
