export const getCohorts = async token => {
    console.log("inside getCohorts");
    console.log(token);
    const url = `https://api.github.com/orgs/codeupClassroom/teams?per_page=100`
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const res = await fetch(url, options);
    if(res.ok) {
        const data = await res.json();
        return data;
    } else {
        console.log("Something went wrong getting teams");
        return null;
    }
};