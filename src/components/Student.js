import styled from "styled-components";

function Student({ student }) {
    return (
        <StudentContainer>
            <StudentImg src={student.avatar_url} />
            {student.login}
        </StudentContainer>
    );
}

export default Student;

const StudentContainer = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
    gap: 1rem;
`;

const StudentImg = styled.img`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
`;