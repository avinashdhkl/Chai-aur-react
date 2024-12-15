export const githubInfoLoader = async () => {
    const link = 'https://api.github.com/users/avinashdhkl';

    const response = await fetch(link, { mode: "cors" })
    return response.json();

}