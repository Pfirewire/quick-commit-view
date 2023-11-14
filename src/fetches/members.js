export const getTeamMembers = async (team, token) => {
    const url = `https://api.github.com/organizations/23344937/team/${team}/members`;
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