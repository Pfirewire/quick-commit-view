export const convertTeamNames = teams => {
    const updatedTeams = teams.filter(team => {
        return (team.slug.toLowerCase().includes('-students'));
    });
    for(const team of updatedTeams) {
        console.log(team.name);
        if(team.name.toLowerCase().includes('-students')) {
            team.name = team.name.substring(0, team.name.indexOf('-students'));
        }
    }
    return updatedTeams;
};