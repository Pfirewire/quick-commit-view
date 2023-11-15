import styled from "styled-components";
import {useEffect, useState} from "react";
import {getTeamMembers} from "../fetches/members";
import {GITHUB_PERSONAL_TOKEN} from "../keys";
import Student from "./Student";

function StudentList({ cohort }) {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        (async () => {
            const teamMembers = await getTeamMembers(cohort, GITHUB_PERSONAL_TOKEN);
            setMembers(teamMembers);
        })();
    }, [cohort]);

    let students;

    if(members !== null) {
        students = members.map((member, index) => {
            return <Student key={index} student={member} />
        });
    } else {
        students = <EmptyCohortMessage>Please choose a cohort</EmptyCohortMessage>
    }


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

const EmptyCohortMessage = styled.div`
    display: flex;
    justify-content: center;
`;