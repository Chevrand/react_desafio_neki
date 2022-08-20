
import styled from 'styled-components';
import colors from '../../themes/colors';
import spacing from '../../themes/spacing';

export const WrapperModal = styled.div`
    width: 20rem;
    height: 35rem;
    background-color: ${colors.primary};
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 20vh;
    left: 40vw;
`;

export const Tittle = styled.h1`
    color: white;
    margin-bottom: ${spacing.medium};
`;

export const Logo = styled.img`
    width: 5rem;
    height: 5rem;
    margin-bottom: ${spacing.medium};
`;

export const UpdateButton = styled.button`
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
    margin-top: ${spacing.large};

    &:hover {
        cursor: pointer;
        transition: 0.35s;
        background-color: ${colors.tertiary};
    }
`;