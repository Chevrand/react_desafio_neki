import styled from "styled-components";
import colors from "../../themes/colors";

export const Container = styled.header`
    display: flex;
    background-color: ${colors.primary};
    height: 10rem;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;

export const Logo = styled.img`
    width: 8rem;
    height: 8rem;
`;

export const LogoutButton = styled.button`
    transition: .5s;
    background: none;
    border-style: solid;
    border-color: white;
    border-radius: 0.5rem;
    width: 10rem;
    font-size: 2rem;
    color: white;
    display: flex;
    justify-content: space-evenly;

    &:hover {
        cursor: pointer;
        transition: 0.35s;
        background-color: ${colors.tertiary};
    }
`;