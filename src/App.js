import MenuBar from "./components/MenuBar";
import StudentList from "./components/StudentList";
import {useEffect, useState} from "react";
import { getCohorts } from "./fetches/teams";
import { GITHUB_PERSONAL_TOKEN } from "./keys";
import styled from "styled-components";

function App() {
    const [ cohort, setCohort ] = useState("Cohort2");
    const [ cohorts, setCohorts ] = useState(["Cohort1", "Cohort2"]);

    useEffect(() => {
        console.log("Inside App.js useEffect");
        (async () => {
            const teams = await getCohorts(GITHUB_PERSONAL_TOKEN);
            console.log(teams);
        })();
    }, []);

    const handleCohortChange = e => {
        console.log(e.target.value);
        setCohort(e.target.value);
    };

    return (
        <AppWrapper>
            <MenuBar cohort={cohort} changeCohort={handleCohortChange} cohorts={cohorts} />
            <StudentList />
        </AppWrapper>
    )
}

export default App;

const AppWrapper = styled.div`
    background-color: var(--prussian-blue);
    color: var(--tiffany-blue);
    min-height: 100vh;
`;