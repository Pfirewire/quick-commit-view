import styled from "styled-components";
import {useEffect} from "react";
import {getPublicEvents} from "../fetches/events";
import {GITHUB_PERSONAL_TOKEN} from "../keys";
import GitHubCalendar from "react-github-calendar";

function Student({ student }) {


    useEffect(() => {
        (async () => {
            const events = await getPublicEvents(student.login, GITHUB_PERSONAL_TOKEN);

        })();
    }, []);

    return (
        <StudentContainer>
            <LeftWrapper>
                <StudentImg src={student.avatar_url} />
                {student.login}
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
`;

const LeftWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 20rem;
`;

const RightWrapper = styled.div`
`;