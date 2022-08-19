import styled from "styled-components";
import colors from "../../themes/colors";

export const Container = styled.header`
    display: flex;
    background-color: ${colors.primary};
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    flex-wrap: wrap;
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
    width: 8rem;
    font-size: 1.5rem;
    color: white;
    display: flex;
    justify-content: space-evenly;
    margin-top: 0.3rem;

    &:hover {
        cursor: pointer;
        transition: 0.35s;
        background-color: ${colors.tertiary};
    }
`;

export const WrapperLogout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-around;
`;

export const UserImg = styled.img`
    width: 4rem;
    height: 4rem;
`;

export const UserName = styled.span`
    color: white;
    font-weight: 500;
`;