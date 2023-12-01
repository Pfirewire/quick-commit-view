import styled from "styled-components";
import {useEffect, useState} from "react";
import {getTeamMembers} from "../fetches/members";
import Student from "./Student";
import {GITHUB_PERSONAL_TOKEN} from "../keys";

function StudentList({ cohort }) {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        (async () => {
            console.log(cohort);
            if(cohort != -1) {
                console.log("Inside if")
                const teamMembers = await getTeamMembers(cohort, "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");
                setMembers(teamMembers);
            }
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