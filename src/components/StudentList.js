import styled from "styled-components";
import {useEffect} from "react";
import {getTeamMembers} from "../fetches/members";
import {GITHUB_PERSONAL_TOKEN} from "../keys";

function StudentList({ cohort }) {

    useEffect(() => {
        console.log(cohort);
        (async () => {
            const members = await getTeamMembers(cohort, GITHUB_PERSONAL_TOKEN);
            console.log(members);
        })();
    }, [cohort]);

    const students = cohort === "" ? "No Cohort" : cohort;

    return (
        <StudentListContainer>
            {students}
        </StudentListContainer>
    );
}

export default StudentList;

const StudentListContainer = styled.div`
    padding: 2rem;
`;