import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import PropTypes from "prop-types";
import decodeUser from "../js/decodeUser";
import Select from "./Select";
function UpdateUserInputs(props) {
    const infos = decodeUser();
    const birthDate = infos.birthDate.split("T")[0];
    const UserInputs = {
        email: infos.email,
        name: infos.name,
        birthDate: birthDate,
        state: infos.state,
        country: infos.country,
        password: "",
        confirmPassword: "",
    };
    const [user, setUser] = useState(UserInputs);
    return (
        <>
            <div className="grid-column">
                <Input
                    className="input"
                    type="text"
                    placeholder="Name"
                    value={user.name}
                    setState={setUser}
                    id={"name"}
                    name={"Nome"}
                />
                <Input
                    className="input"
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    setState={setUser}
                    id={"email"}
                    name={"Email"}
                />

                <Input
                    className="input"
                    type="date"
                    placeholder="Birth Date"
                    value={user.birthDate}
                    setState={setUser}
                    id={"birthDate"}
                    name={"Data de Nascimento"}
                />
                {/* <Select value={user.country} setState={setUser} /> */}
                <Select
                    className={"input"}
                    value={user.country}
                    setState={setUser}
                    name={"País"}
                    id={"country"}
                    disabledOption={"Selecione o seu país"}
                />
                <Input
                    className="input"
                    type="password"
                    placeholder="Senha"
                    value={user.password}
                    setState={setUser}
                    id={"password"}
                    name={"Senha"}
                />
                <Input
                    className="input"
                    type="password"
                    placeholder="Confirme sua senha"
                    value={user.confirmPassword}
                    setState={setUser}
                    id={"confirmPassword"}
                    name={"Confirme sua senha"}
                />
            </div>

            <div id="signup-button-container">
                <Button
                    className="button"
                    type="submit"
                    title="Atualizar"
                    user={user}
                    page={props.page}
                    to={"#"}
                />
            </div>
        </>
    );
}
UpdateUserInputs.propTypes = {
    page: PropTypes.string,
};
export default UpdateUserInputs;
