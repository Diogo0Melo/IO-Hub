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
