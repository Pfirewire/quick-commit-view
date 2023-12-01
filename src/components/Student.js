import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";

function Student({ student }) {
    const handleAvatarClick = e => {
        const url = e.target.previousElementSibling.getAttribute('href');
        window.open(url, "_blank");
    }

    return (
        <StudentContainer>
            <LeftWrapper>
                <a rel="noreferrer" target="_blank" href={student.html_url}>{student.login}</a>
                <StudentImg src={student.avatar_url} onClick={handleAvatarClick} />
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
    justify-content: center;
    align-items: center;
    gap: 1rem;
    min-width: 1080px;
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
    justify-content: end;
    align-items: center;
    gap: 1rem;
    width: 15rem;
`;

const RightWrapper = styled.div`
`;