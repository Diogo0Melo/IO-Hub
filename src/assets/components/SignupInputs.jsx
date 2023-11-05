import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import PropTypes from "prop-types";
function SignupInputs(props) {
    const UserInputs = {
        confirmPassword: "",
        password: "",
        email: "",
        name: "",
        birthDate: "",
        state: "",
        country: "",
    };
    const [user, setUser] = useState(UserInputs);
    return (
        <div id="signup">
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
                type="password"
                placeholder="Password"
                value={user.password}
                setState={setUser}
                id={"password"}
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
            <Input
                className="input"
                type="text"
                placeholder="Country"
                value={user.country}
                setState={setUser}
                id={"country"}
                name={"Pais"}
            />
            <Input
                className={"input"}
                type="text"
                placeholder="State"
                value={user.state}
                setState={setUser}
                id={"state"}
                name={"Estado"}
            />
            <div>
                <Button
                    className="button"
                    type="submit"
                    title="Cadastrar"
                    user={user}
                    page={props.page}
                />
            </div>
        </div>
    );
}
SignupInputs.propTypes = {
    page: PropTypes.string,
};
export default SignupInputs;
