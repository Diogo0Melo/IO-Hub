import "../styles/Textarea.css";
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
            ></textarea>
        </div>
    );
}
export default Textarea;
