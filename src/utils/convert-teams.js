export const convertTeamNames = teams => {
    console.log(teams);
    const updatedTeams = teams.filter(team => {
        return (team.slug.toLowerCase().includes('-students') || team.slug.toLowerCase().includes('-cohort'));
    });
    for(const team of updatedTeams) {
        if(team.name.toLowerCase().includes('-students')) {
            team.name = team.name.substring(0, team.name.indexOf('-students'));
        }
        if(team.name.toLowerCase().includes('-cohort')) {
            team.name = team.name.substring(0, team.name.indexOf('-cohort'));
        }
    }
    updatedTeams.unshift({id: -1, name: "Choose Cohort"});
    return updatedTeams;
};