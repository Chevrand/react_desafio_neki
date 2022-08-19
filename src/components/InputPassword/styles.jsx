import styled from "styled-components";
import colors from "../../themes/colors";
import spacing from "../../themes/spacing";

export const StyledInput = styled.input`
    width: 15rem;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    margin-bottom: ${spacing.small};
    padding-left: 0.5rem;
    font-size: 1rem;
    color: ${colors.primary};
    font-weight: 550;
    text-align: center;
    margin-right: -2.5rem;
`;

export const EyeButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    color: ${colors.primary};

    &:hover {
        cursor: pointer;
    }
`;

export const WrapperInput = styled.div`
    display: flex;
`