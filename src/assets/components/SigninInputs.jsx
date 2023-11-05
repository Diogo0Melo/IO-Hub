import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import PropTypes from "prop-types";
function SigninInputs(props) {
    const UserInputs = {
        email: "",
        password: "",
    };
    const [user, setUser] = useState(UserInputs);
    return (
        <div>
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
                type="password"
                placeholder="Password"
                value={user.password}
                setState={setUser}
                id={"password"}
                name={"Senha"}
            />
            <div id="signin-button-container">
                <Button
                    className="button"
                    type="submit"
                    title={props.page === "/signup" ? "Cadastrar" : "Entrar"}
                    user={user}
                    page={props.page}
                />
            </div>
        </div>
    );
}
SigninInputs.propTypes = {
    page: PropTypes.string,
};
export default SigninInputs;
