import styled from "styled-components";
import colors from "../../themes/colors";
import spacing from "../../themes/spacing";

export const WrapperSkills = styled.div`
    background-color: ${colors.secondary};
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${spacing.medium};
`;

export const PlusButton = styled.button`
    transition: .5s;
    background-color: ${colors.secondary};
    border: none;
    border-radius: 0.5rem;
    font-size: 5rem;
    font-weight: bold;
    color: ${colors.tertiary};
    height: 5rem;
    width: 5rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${spacing.medium};

    &:hover {
        cursor: pointer;
        transition: 0.35s;
        background-color: ${colors.tertiary};
        color: white;
    }
`;