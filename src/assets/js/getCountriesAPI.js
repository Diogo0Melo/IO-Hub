async function getCountriesAPI() {
    const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/paises/*"
    );
    const data = await response.json();

    const countries = new Set();

    data.forEach((country) => {
        countries.add(country.nome.abreviado);
    });
    return Array.from(countries).sort((a, b) => a.localeCompare(b));
}

export default getCountriesAPI;
