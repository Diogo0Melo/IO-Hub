import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Button.css";
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
        this.signIp = this.signIp.bind(this);
    }
    async signUp() {
        const response = await fetch(
            "https://back-end-frameworkk.vercel.app/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: this.props.user.name,
                    email: this.props.user.email,
                    password: this.props.user.password,
                    confirmPassword: this.props.user.confirmPassword,
                    birthDate: this.props.user.birthDate,
                    country: this.props.user.country,
                    state: this.props.user.state,
                }),
            }
        );
        console.log(this.props.user);
        const data = await response.json();
        console.log(data);
    }
    async signIp() {
        const response = await fetch(
            "https://back-end-frameworkk.vercel.app/users/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: this.props.user.email,
                    password: this.props.user.password,
                }),
            }
        );
        console.log(this.props.user);
        const data = await response.json();
        console.log(data);
    }
    render() {
        return (
            <Link to={this.props.to}>
                <button
                    className={this.props.className}
                    type={this.props.type}
                    onClick={
                        this.props.page === "/signup"
                            ? this.signUp
                            : this.signIp
                    }
                >
                    {this.props.title}
                </button>
            </Link>
        );
    }
}
Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    signUp: PropTypes.func,
    title: PropTypes.string,
    to: PropTypes.string,
    user: PropTypes.object,
    page: PropTypes.string,
};
export default Button;
