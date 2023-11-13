export const getCohorts = async token => {
    const url = `https://api.github.com/orgs/codeupClassroom/teams`
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
        console.log("Something went wrong getting teams");
        return null;
    }
};