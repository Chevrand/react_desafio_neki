import { EyeButton, StyledInput, WrapperInput } from "./styles"
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";


const InputPassword = ({ value, placeholder, onChange }) => {
    const [ eyeType, setEyeType ] = useState(<BsFillEyeSlashFill/>);
    const [ inputType, setInputType ] = useState("password");

    const passwordVisibility = () => {
        if(inputType === "text") {
            setInputType("password");
            setEyeType(<BsFillEyeSlashFill/>);
        }else {
            setInputType("text");
            setEyeType(<BsFillEyeFill/>);
        }
    };

    return (
        <WrapperInput>
            <StyledInput type={inputType} value={value} placeholder={placeholder} onChange={onChange} />
            <EyeButton onClick={()=> passwordVisibility()}>{eyeType}</EyeButton>
        </WrapperInput>
    )
}

export default InputPassword;