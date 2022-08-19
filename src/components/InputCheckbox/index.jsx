//Styles
import { StyledInputbox, StyledLabel, WrapperCheckbox } from "./styles";

const InputCheckbox = ({ checked, onChange }) => {

    return (
        <WrapperCheckbox>
            <StyledLabel>
                <StyledInputbox type="checkbox" checked={checked} onChange={onChange} />
                Salvar login
            </StyledLabel>
        </WrapperCheckbox>
    )
}

export default InputCheckbox;