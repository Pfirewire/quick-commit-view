import styled from "styled-components";
import {useEffect, useState} from "react";
import {getTeamMembers} from "../fetches/members";
import {GITHUB_PERSONAL_TOKEN} from "../keys";
import Student from "./Student";

function StudentList({ cohort }) {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        console.log(cohort);
        (async () => {
            const teamMembers = await getTeamMembers(cohort, GITHUB_PERSONAL_TOKEN);
            console.log(teamMembers);
            setMembers(teamMembers);
        })();
    }, [cohort]);

    let students;

    if(members !== null) {
        students = members.map((member, index) => {
            return <Student key={index} student={member} />
        });
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