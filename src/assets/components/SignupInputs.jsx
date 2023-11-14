import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import PropTypes from "prop-types";
import Select from "./Select";
function SignupInputs(props) {
    const UserInputs = {
        confirmPassword: "",
        "password-signup": "",
        "email-signup": "",
        name: "",
        birthDate: "",
        state: "",
        country: "",
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
                    value={user["email-signup"]}
                    setState={setUser}
                    id={"email-signup"}
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
                <Select
                    className={"input"}
                    value={user.country}
                    setState={setUser}
                    name={"País"}
                    id={"country"}
                    disabledOption={"Selecione o seu país"}
                />
                {/* <Input
                    className="input"
                    type="text"
                    placeholder="Country"
                    value={user.country}
                    setState={setUser}
                    id={"country"}
                    name={"País"}
                /> */}
                <Input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={user["password-signup"]}
                    setState={setUser}
                    id={"password-signup"}
                    name={"Senha"}
                />
                <Input
                    className="input"
                    type="password"
                    placeholder="Confirm Password"
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
                    title="Cadastrar"
                    user={user}
                    page={props.page}
                    to={"#"}
                />
            </div>
        </>
    );
}
SignupInputs.propTypes = {
    page: PropTypes.string,
};
export default SignupInputs;
