import styled from "styled-components";

function MenuBar({ cohort, token, setToken, submitToken }) {
    const handleTokenChange = e => {
        setToken(e.target.value);
    };

    const handleTokenSubmit = () => {
        console.log("Inside MenuBar handleTokenSubmit function");
        submitToken();
    };

    return (
        <MenuBarContainer>
            Menu Bar: {cohort}
            <input type={"text"} value={token} onChange={handleTokenChange} />
            <button onClick={handleTokenSubmit}>Submit</button>
        </MenuBarContainer>
    );
}

export default MenuBar;

const MenuBarContainer = styled.div`
    background-color: var(--tiffany-blue);
    color: var(--prussian-blue);
    display: flex;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-size: larger;
`;