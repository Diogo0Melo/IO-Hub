// const response = await fetch(
//     "https://servicodados.ibge.gov.br/api/v1/paises/*"
// );
// const data = await response.json();
// const countries = () => {
//     return data.map((country) => {
//         return (
//             <option key={country.nome.abreviado} value={country.nome.abreviado}>
//                 {country.nome.abreviado}
//             </option>
//         );
//     });
// };
import SignCard from "../components/SignCard";
import "../styles/SignPage.css";
function SignupPage() {
    return (
        <div>
            <h1>IO Hub</h1>
            <SignCard />
        </div>
    );
}
export default SignupPage;
