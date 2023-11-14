import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import Select from "./Select";
import PropTypes from "prop-types";
import Textarea from "./Textarea";

function GameInputs(props) {
    const gameInputs = {
        name: "",
        urlToGame: "",
        urlToImage: "",
        urlToVideo: "",
        description: "",
        category: "",
    };
    const [game, setGame] = useState(gameInputs);
    return (
        <>
            <div className="grid-column">
                <Input
                    className={"input"}
                    type="text"
                    placeholder="Nome do jogo"
                    id="name"
                    name="Nome"
                    value={game.name}
                    setState={setGame}
                />
                <Input
                    className={"input"}
                    type="text"
                    placeholder="Url para jogo"
                    id="urlToGame"
                    name="Url para jogo"
                    value={game.urlToGame}
                    setState={setGame}
                />

                <Textarea
                    className={"textarea input"}
                    type="text"
                    placeholder="Descrição"
                    id="description"
                    name="Descrição"
                    value={game.description}
                    setState={setGame}
                    rows={3}
                />
                <Select
                    disabledOption={"Selecione uma categoria"}
                    page={props.page}
                    id={"category"}
                    name={"Categoria"}
                    setState={setGame}
                    value={game.category}
                    className="input select"
                    size={3}
                />
                <Input
                    className={"input"}
                    type="text"
                    placeholder="Url para imagem"
                    id="urlToImage"
                    name="Url para imagem"
                    value={game.urlToImage}
                    setState={setGame}
                />
                <Input
                    className={"input"}
                    type="text"
                    placeholder="Url para video"
                    id="urlToVideo"
                    name="Url para video"
                    value={game.urlToVideo}
                    setState={setGame}
                />
            </div>
            <div id="signin-button-container">
                <Button
                    className="button"
                    type="submit"
                    title="Adicionar"
                    page={props.page}
                    to="#"
                    game={game}
                />
            </div>
        </>
    );
}
GameInputs.propTypes = {
    page: PropTypes.string,
};
export default GameInputs;
