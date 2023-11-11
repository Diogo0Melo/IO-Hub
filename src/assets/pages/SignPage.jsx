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
import Logo from "../components/Logo";
import FormCard from "../components/FormCard";
import "../styles/SignPage.css";
function SignupPage() {
    return (
        <div id="sign-page-container">
            <div id="logo-container-in-sign">
                <Logo
                    style={{
                        height: "100px",
                        borderRadius: "150%",
                        boxShadow: "0px 0px 10px #000",
                    }}
                />
            </div>
            <FormCard />
        </div>
    );
}
export default SignupPage;
