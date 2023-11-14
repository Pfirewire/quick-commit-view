export const getPublicEvents = async (username, token) => {
    const url = `https://api.github.com/users/${username}/events/public`;
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const res = await fetch(url, options);
    if(res.ok) {
        const data = await res.json();
        console.log(data);
        return data;
    } else {
        console.log("Something went wrong getting team members");
        return null;
    }
};