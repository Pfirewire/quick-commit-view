import styled from "styled-components";

function MenuBar({ cohort, changeCohort, cohorts }) {

    const cohortsSelect = cohorts.map((singleCohort, index) => {
        return <option key={index} value={singleCohort.name}>{singleCohort.name}</option>
    });

    return (
        <MenuBarContainer>
            <select value={cohort} name={"cohorts"} onChange={changeCohort}>
                {cohortsSelect}
            </select>
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