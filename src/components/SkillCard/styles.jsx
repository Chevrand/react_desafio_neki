import styled from "styled-components";
import colors from "../../themes/colors";

export const WrapperCard = styled.div`
    min-width: 35vw;
    background-color: ${colors.primary};
    border-radius: 1rem;
    display: flex;
    padding: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
`;

export const WrapperButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 5.3rem;
`;

export const WrapperDescription = styled.div`
    color: white;
    margin: 0.5rem;
    width: 15rem;
`;

export const StyledButton = styled.button`
    transition: .5s;
    background: none;
    border-style: solid;
    border-color: white;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    color: white;
    height: 2.3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        transition: 0.35s;
        background-color: ${colors.tertiary};
    }
`;

export const SkillImg = styled.img`
    width: 8rem;
    height: 8rem;
    border: solid;
    border-color: ${colors.tertiary};
    border-radius: 1rem;
    margin: 1rem;
`;