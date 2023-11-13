import Textarea from "./Textarea";
import "../styles/RatingsContainer.css";
import Button from "./Button";
import { useState } from "react";
import Ratings from "./Ratings";
import star from "../img/star-gold-orange-svgrepo-com.svg";
import PropTypes from "prop-types";
function RatingsContainer(props) {
    const page = window.location.pathname;
    const userInputs = {
        score: 0,
        comment: "",
    };
    const [user, setUser] = useState(userInputs);
    const onClick = (e) => {
        const { id } = e.target;
        const parent = e.target.parentElement;
        const score = id.split("star")[1];

        for (let i = 0; i < parent.children.length; i++) {
            if (i + 1 > +score) {
                parent.children[i].classList.add("not-selected");
                continue;
            }
            parent.children[i].classList.remove("not-selected");
        }

        setUser((prevState) => ({
            ...prevState,
            score: +score,
        }));
    };
    const onClickUserRating = (e) => {
        const score = e.target.querySelector("h3:nth-of-type(2)");
        const comment = e.target.querySelector("p");
        console.log(score);
        console.log(comment);
        console.log(score.children);
        console.log(comment.textContent);
        console.log(score.children.length);
        setUser((prevState) => ({
            ...prevState,
            score: score.children.length,
            comment: comment.textContent,
        }));
        props.setState((prevState) => ({
            ...prevState,
            ratingStatus: "editing",
        }));
    };
    const returnUserRating = () => {
        const userID = sessionStorage.getItem("_userID");
        const condition = props.ratings?.find((el) => el.user._id === userID);

        if (condition && props.ratingStatus !== "editing") {
            return (
                <form id="rating-form-container">
                    <Ratings
                        userRating={condition}
                        onClick={onClickUserRating}
                    />
                </form>
            );
        }
        return (
            <form id="rating-form-container">
                <h3>O que achou do jogo?</h3>
                <div>
                    <img
                        src={star}
                        className={`star ${
                            user.score >= 1 ? "" : "not-selected"
                        } pointer`}
                        id="star1"
                        onClick={onClick}
                    />
                    <img
                        src={star}
                        className={`star ${
                            user.score >= 2 ? "" : "not-selected"
                        } pointer`}
                        id="star2"
                        onClick={onClick}
                    />
                    <img
                        src={star}
                        className={`star ${
                            user.score >= 3 ? "" : "not-selected"
                        } pointer`}
                        id="star3"
                        onClick={onClick}
                    />
                    <img
                        src={star}
                        className={`star ${
                            user.score >= 4 ? "" : "not-selected"
                        } pointer`}
                        id="star4"
                        onClick={onClick}
                    />
                    <img
                        src={star}
                        className={`star ${
                            user.score >= 5 ? "" : "not-selected"
                        } pointer`}
                        id="star5"
                        onClick={onClick}
                    />
                </div>
                <Textarea
                    name={"comment"}
                    id={"comment"}
                    placeholder={"Deixe um comentário"}
                    className={"input textarea"}
                    setState={setUser}
                    value={user.comment}
                    rows={6}
                    cols={50}
                />
                <Button
                    className={"button"}
                    type={"submit"}
                    title={"Enviar"}
                    page={page}
                    user={user}
                    ratingStatus={props.ratingStatus}
                    ratingID={condition?._id}
                    setState={props.setState}
                    // reload={props.reload}
                />
            </form>
        );
    };
    return (
        <>
            <h3 id="rating-title">Avaliações</h3>

            {returnUserRating()}
            <div id="ratings-container">
                <Ratings ratings={props.ratings} />
            </div>
        </>
    );
}
RatingsContainer.propTypes = {
    ratings: PropTypes.array,
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    setState: PropTypes.func,
    ratingStatus: PropTypes.string,
};
export default RatingsContainer;
