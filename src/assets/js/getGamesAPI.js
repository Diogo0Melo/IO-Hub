async function getGamesAPI() {
    const response = await fetch(
        "https://back-end-frameworkk.vercel.app/games"
    );
    return await response.json();
}
export default getGamesAPI;
