async function getRatingsAPI(gameID) {
    const response = await fetch(
        `https://back-end-frameworkk.vercel.app/games/${gameID}/ratings`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return await response.json();
}
export default getRatingsAPI;
