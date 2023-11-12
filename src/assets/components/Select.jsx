// import countries from "../js/getCountriesAPI";
// const addCountries = () => {
//     const countriesAtoZ = Array.from(countries).sort();
//     return countriesAtoZ.map((country) => {
//         return (
//             <option key={country} value={country}>
//                 {country}
//             </option>
//         );
//     });
// };
// function Select(props) {
//     const onChange = (e) => {
//         const { id, value } = e.target;
//         props.setState((prevState) => ({ ...prevState, [id]: value }));
//     };
//     return (
//         <select name="country" id="country" onChange={onChange}>
//             <option value={props.value} disabled>
//                 Selecione o seu país
//             </option>
//             {addCountries()}
//         </select>
//     );
// }
// export default Select;
import "../styles/Select.css";
import PropTypes from "prop-types";
const response = await fetch(
    "https://back-end-frameworkk.vercel.app/categories",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
);
const data = await response.json();
console.log(data);

// const set = new Set();
function Select(props) {
    // const showSelectedCategories = () =>
    //     Array.from(set).map((category) => {
    //         const categoryParsed = JSON.parse(category);
    //         return `${categoryParsed.name} `;
    //     });
    const returnCategories = () => {
        return data.map((category) => {
            return (
                <option key={category.name} value={JSON.stringify(category)}>
                    {category.name}
                </option>
            );
        });
    };
    const onChange = (e) => {
        const { id, value } = e.target;
        // if (id === "categories" && props.page === "/game") {
        //     // if (set.has(value)) {
        //     //     set.delete(value);
        //     //     props.setState((prevState) => ({
        //     //         ...prevState,
        //     //         category: set,
        //     //     }));
        //     //     return;
        //     // }
        //     // set.add(value);
        //     props.setState((prevState) => ({
        //         ...prevState,
        //         categories: value,
        //     }));
        //     return;
        // }
        console.log(props.value);
        props.setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    return (
        <div id="select-container">
            {props.page === "/search" || (
                <label htmlFor={props.id}>Categorias Disponiveis</label>
            )}
            <select
                name={props.name}
                value={props.value}
                id={props.id}
                onChange={props.onChange ? props.onChange : onChange}
                className={props.className}
                // size={props.size ? props.size : undefined}
            >
                <option value={""} disabled>
                    {props.disabledOption}
                </option>
                {returnCategories()}
            </select>
        </div>
    );
}
Select.propTypes = {
    disabledOption: PropTypes.string,
    page: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    setState: PropTypes.func,
    value: PropTypes.object,
    className: PropTypes.string,
    size: PropTypes.number,
    onChange: PropTypes.func,
};
export default Select;
