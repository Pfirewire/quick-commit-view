import MenuBar from "./components/MenuBar";
import StudentList from "./components/StudentList";
import {useEffect, useState} from "react";
import { getCohorts } from "./fetches/teams";
import styled from "styled-components";
import {convertTeamNames} from "./utils/convert-teams";
import {GITHUB_PERSONAL_TOKEN} from "./keys";

function App() {
    const [ cohort, setCohort ] = useState("-1");
    const [ cohorts, setCohorts ] = useState([]);

    useEffect(() => {
        (async () => {
            const teams = await getCohorts("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");
            const updatedTeams = convertTeamNames(teams);
            setCohorts(updatedTeams);
        })();
    }, []);

    const handleCohortChange = e => {
        setCohort(e.target.value);
    };

    return (
        <AppWrapper>
            <MenuBar cohort={cohort} changeCohort={handleCohortChange} cohorts={cohorts} />
            <StudentList cohort={cohort} />
        </AppWrapper>
    )
}

export default App;

const AppWrapper = styled.div`
    background-color: var(--prussian-blue);
    color: var(--tiffany-blue);
    min-height: 100vh;
`;