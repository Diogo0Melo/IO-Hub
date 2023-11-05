import PropTypes from "prop-types";
import "../../index.css";
import "../styles/Input.css";
function Input(props) {
    const onInput = (e) => {
        const { id, value } = e.target;
        props.setState((prevState) => ({ ...prevState, [id]: value }));
    };
    return (
        <div>
            <label htmlFor={props.id}>{props.name}</label>
            <input
                className={props.className}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onInput={onInput}
                id={props.id}
            />
        </div>
    );
}

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onInput: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    setState: PropTypes.func,
};
export default Input;
