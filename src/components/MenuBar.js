import styled from "styled-components";

function MenuBar({ cohort }) {
    return (
        <MenuBarContainer>
            Menu Bar: {cohort}
        </MenuBarContainer>
    );
}

export default MenuBar;

const MenuBarContainer = styled.div`
    background-color: darkgray;
`;