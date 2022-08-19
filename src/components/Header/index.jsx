//Styles
import { Container, Logo, LogoutButton, UserImg, UserName, WrapperLogout } from './styles';
import imgLogo from '../../assets/logo.png';
import { AiOutlinePoweroff } from "react-icons/ai";
import imgUser from '../../assets/user.png';

//Others
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const Header = () => {
  const { logout, user } = useContext(AuthContext);

  return (
    <Container>
      <Logo src={imgLogo} />
      <WrapperLogout>
        <UserImg src={imgUser} />
        <UserName>Bem vindo, {user.userLogin}!</UserName>
        <LogoutButton onClick={() => logout()}>
          <AiOutlinePoweroff />
          Logout
        </LogoutButton>
      </WrapperLogout>
    </Container>
  );
}

export default Header;