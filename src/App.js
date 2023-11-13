import MenuBar from "./components/MenuBar";
import StudentList from "./components/StudentList";
import { useState } from "react";
import { getCohorts } from "./fetches/teams";
import styled from "styled-components";

function App() {
    const [ token, setToken ] = useState("");
    const [ cohort, setCohort ] = useState("Enter Token");
    const [ cohorts, setCohorts ] = useState([]);

    const handleTokenChange = (str) => {
        console.log(token);
        setToken(str);
    };

    const handleTokenSubmit = async () => {
        console.log(token);
        setCohorts(await getCohorts(token));
    }

    return (
        <AppWrapper>
            <MenuBar cohort={cohort} token={token} setToken={handleTokenChange} submitToken={handleTokenSubmit} />
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