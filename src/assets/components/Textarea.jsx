import "../styles/Textarea.css";
import PropTypes from "prop-types";
function Textarea(props) {
    const onInput = (e) => {
        const { id, value } = e.target;
        props.setState((prevState) => ({ ...prevState, [id]: value }));
    };
    return (
        <div>
            <textarea
                onInput={onInput}
                name={props.name}
                value={props.value}
                className={props.className}
                id={props.id}
                placeholder={props.placeholder}
                rows={props.rows ? props.rows : 3}
                maxLength="255"
            />
        </div>
    );
}
Textarea.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number,
    setState: PropTypes.func,
};
export default Textarea;
