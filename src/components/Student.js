import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";

function Student({ student }) {
    const handleAvatarClick = e => {
        const url = e.target.nextElementSibling.getAttribute('href');
        window.open(url, "_blank");
    }

    return (
        <StudentContainer>
            <LeftWrapper>
                <StudentImg src={student.avatar_url} onClick={handleAvatarClick} />
                <a target={"_blank"} href={student.html_url}>{student.login}</a>
            </LeftWrapper>
            <RightWrapper>
                <GitHubCalendar username={student.login} colorScheme={"dark"} blockSize={10} fontSize={12} />
            </RightWrapper>
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
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    transition: transform 120ms ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`;

const LeftWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 20rem;
`;

const RightWrapper = styled.div`
`;