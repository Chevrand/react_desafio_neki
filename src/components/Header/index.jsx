//Styles
import { Container, Logo, LogoutButton } from './styles';
import imgLogo from '../../assets/logo.png';
import { AiOutlinePoweroff } from "react-icons/ai";

//Others
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const Header = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Container>
        <Logo src={imgLogo} />
        <LogoutButton onClick={()=> logout()}>
          <AiOutlinePoweroff/>
          Logout
        </LogoutButton>
    </Container>
  );
}

export default Header;