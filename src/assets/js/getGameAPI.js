async function getGameAPI(page) {
    const split = page.split("/");
    console.log(split[2]);
    const response = await fetch(
        `https://back-end-frameworkk.vercel.app/games/${split[2]}`
    );
    return await response.json();
}
export default getGameAPI;
