async function getCategoriesAPI() {
    const response = await fetch(
        "https://back-end-frameworkk.vercel.app/categories",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return await response.json();
}
export default getCategoriesAPI;
