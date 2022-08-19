//Styles
import { Logo, Tittle, WrapperLogin, Link, LoginButton } from "./styles"
import imgLogo from '../../assets/logo.png';

//Components
import { MainContainer } from './../../components/MainContainer/styles';
import { InputDefault } from '../../components/Input/styles';
import InputPassword from './../../components/InputPassword/index';
import InputCheckbox from './../../components/InputCheckbox/index';

//Others
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";

const Login = () => {
    const { login, savedLogin } = useContext(AuthContext);
    const [ userLogin, setUserLogin ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ saveLogin, setSaveLogin ] = useState(false);

    useEffect(()=> {
        if(savedLogin) {
            setSaveLogin(true);
            setUserLogin(savedLogin.userLogin);
            setPassword(savedLogin.password);
        }
    },[savedLogin]);

    const handleChange = () => {
        if(!saveLogin) {
            setSaveLogin(true);
        }else {
            setSaveLogin(false);
        }
    }

    return (
        <MainContainer style={{ justifyContent: 'center' }}>
            <WrapperLogin>
                <Tittle>Login</Tittle>
                <Logo src={imgLogo} />
                <InputDefault value={userLogin} placeholder="Login" onChange={(e) => setUserLogin(e.target.value)} />
                <InputPassword value={password} onChange={(e) => setPassword(e.target.value)} />
                <InputCheckbox checked={saveLogin} onChange={()=> handleChange()} />
                <Link href="https://www.w3schools.com" style>Cadastre-se aqui!</Link>
                <LoginButton onClick={()=> login(userLogin, password, saveLogin)}>Entrar</LoginButton>
            </WrapperLogin>
        </MainContainer>
    )
}

export default Login;