//Components
import { MainContainer } from "../../components/MainContainer/styles"
import { InputDefault } from "../../components/Input/styles";
import InputPassword from "../../components/InputPassword";

//Styles
import { Logo, SignupButton, Tittle, WrapperSignup } from "./styles";
import imgLogo from "../../assets/signup.png";

//Others
import { useState } from 'react';
import { api } from './../../services/api';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [userLogin, setUserLogin] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const navigate = useNavigate();
    
    const signup = async () => {
        const errorMsg = "Algo deu errado com a requisição. Verifique os campos digitados e tente novamente!";
        
        if (password === password2 & (userLogin & password)) {
            try {
                const { data } = await api.post(`/user/save`,
                    {
                        login: userLogin,
                        password: password
                    }
                );
                alert(data);
                navigate("/login");
            }catch {
                alert(errorMsg);
            }
        } else {
            alert(errorMsg);
        }
    }

    return (
        <MainContainer style={{ justifyContent: 'center' }}>
            <WrapperSignup>
                <Tittle>Cadastre-se</Tittle>
                <Logo src={imgLogo} />
                <InputDefault value={userLogin} placeholder="Login" onChange={(e) => setUserLogin(e.target.value)} />
                <InputPassword value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <InputPassword value={password2} placeholder="Confirmar Password" onChange={(e) => setPassword2(e.target.value)} />
                <SignupButton onClick={() => signup(userLogin, password, password2)}>Cadastrar</SignupButton>
            </WrapperSignup>
        </MainContainer>
    )
}

export default SignupPage;