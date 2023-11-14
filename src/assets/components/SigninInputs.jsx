import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import PropTypes from "prop-types";
function SigninInputs(props) {
    const UserInputs = {
        "email-signin": "",
        "password-signin": "",
    };
    const [user, setUser] = useState(UserInputs);
    return (
        <div>
            <Input
                className="input"
                type="email"
                placeholder="Email"
                value={user["email-signin"]}
                setState={setUser}
                id={"email-signin"}
                name={"Email"}
            />
            <Input
                className="input"
                type="password"
                placeholder="Password"
                value={user["password-signin"]}
                setState={setUser}
                id={"password-signin"}
                name={"Senha"}
            />
            <div id="signin-button-container">
                <Button
                    className="button"
                    type="submit"
                    title="Entrar"
                    user={user}
                    page={props.page}
                    to="/IO-Hub"
                />
            </div>
        </div>
    );
}
SigninInputs.propTypes = {
    page: PropTypes.string,
};
export default SigninInputs;
