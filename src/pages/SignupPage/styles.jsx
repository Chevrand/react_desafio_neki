import styled from "styled-components";
import colors from "../../themes/colors";
import spacing from "../../themes/spacing";

export const WrapperSignup = styled.div`
    width: 20rem;
    height: 35rem;
    background-color: ${colors.primary};
    border-radius: 1.5rem;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Tittle = styled.h1`
    color: white;
    margin-bottom: ${spacing.small};
`;

export const Logo = styled.img`
    width: 5rem;
    height: 5rem;
    margin-bottom: ${spacing.medium};
`;

export const SignupButton = styled.button`
    transition: .5s;
    background-color: ${colors.secondary};
    border: none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    height: 3rem;
    width: 9rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${spacing.medium};

    &:hover {
        cursor: pointer;
        transition: 0.35s;
        background-color: ${colors.tertiary};
    }
`;