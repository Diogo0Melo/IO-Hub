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
        ratingStatus: PropTypes.string,
        ratingID: PropTypes.string,
        setState: PropTypes.func,
    };
    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
        this.signIn = this.signIn.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.addGame = this.addGame.bind(this);
        this.addRating = this.addRating.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }
    async signUp(e) {
        e.preventDefault();
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
        await this.signIn(
            e,
            this.props.user["email-signup"],
            this.props.user["password-signup"]
        );
    }
    async signIn(e, email, password) {
        e.preventDefault();
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
        window.location.href = "/";
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
        if (!this.token || !this.userID) window.location.href = `/signin`;
        const method = this.props.ratingStatus === "editing" ? "PUT" : "POST";
        const endPoint =
            method === "POST" ? "ratings" : `ratings/${this.props.ratingID}`;
        const split = this.props.page.split("/");
        const response = await fetch(`${this.api}/${endPoint}`, {
            method,
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
        this.props.setState((prevState) => ({
            ...prevState,
            ratingStatus: "rated",
        }));
        console.log(this.props.ratingStatus);
        console.log(this.props.ratingID);
    }
    async updateUser() {
        const response = await fetch(`${this.api}/users/${this.userID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.token,
            },
            body: JSON.stringify({
                name: this.props.user.name,
                email: this.props.user.email,
                birthDate: this.props.user.birthDate,
                country: this.props.user.country,
                password: this.props.user.password,
                confirmPassword: this.props.user.confirmPassword,
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
            (this.props.page === `/game/${split[2]}` && this.addRating) ||
            (this.props.page === "/settings" && this.updateUser);

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
