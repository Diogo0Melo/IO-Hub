import Textarea from "./Textarea";
import "../styles/RatingsContainer.css";
import Button from "./Button";
import { useState } from "react";
import Ratings from "./Ratings";
import star from "../img/star-gold-orange-svgrepo-com.svg";
function RatingsContainer() {
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
            if (i >= +score) {
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
    console.log(user);
    return (
        <>
            <h3 id="rating-title">Avaliações</h3>

            <form id="rating-form-container">
                <h3>O que achou do jogo?</h3>
                <div>
                    <img
                        src={star}
                        alt=""
                        className="star not-selected pointer"
                        id="star1"
                        onClick={onClick}
                    />
                    <img
                        src={star}
                        alt=""
                        className="star not-selected pointer"
                        id="star2"
                        onClick={onClick}
                    />
                    <img
                        src={star}
                        alt=""
                        className="star not-selected pointer"
                        id="star3"
                        onClick={onClick}
                    />
                    <img
                        src={star}
                        alt=""
                        className="star not-selected pointer"
                        id="star4"
                        onClick={onClick}
                    />
                    <img
                        src={star}
                        alt=""
                        className="star not-selected pointer"
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
                />
                <Button
                    className={"button"}
                    type={"submit"}
                    title={"Avaliar"}
                    page={page}
                    user={user}
                />
            </form>
            <div id="ratings-container">
                <Ratings />
            </div>
        </>
    );
}
export default RatingsContainer;
