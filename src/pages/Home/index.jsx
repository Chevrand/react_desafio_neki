//Components
import Header from "../../components/Header";
import { MainContainer } from './../../components/MainContainer/styles';
import SkillCard from "../../components/SkillCard";
import ModalRegistration from "../../components/ModalRegistration";

//Styles
import { PlusButton, WrapperSkills } from "./styles";
import { AiFillPlusCircle } from "react-icons/ai";

//Others
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../../contexts/auth";
import { api } from './../../services/api';

const Home = () => {
    const { user, token } = useContext(AuthContext);
    const [skillList, setSkillList] = useState([]);
    const [ modal, setModal ] = useState(false);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const getSkillList = async (userLogin) => {
        try {
            const { data } = await api.get(`/user-skill/${userLogin}`);
            setSkillList(data);
        } catch {
            alert("Algo de errado ocorreu com a requisição. Por favor, tente mais tarde!");
        }
    }

    useEffect(() => {
        getSkillList(user.userLogin);
    }, [skillList]);

    const addUserSkill = () => {
        setModal(true);
    }

    return (
        <MainContainer>
            <Header />
            <WrapperSkills>
                <PlusButton onClick={() => addUserSkill()}>
                    <AiFillPlusCircle />
                </PlusButton>
                {skillList.map((skill) => (
                    <SkillCard
                        userSkillId={skill.id}
                        skillImg={skill.skillImage}
                        skillName={skill.skillName}
                        skillLevel={skill.knowledgLevel}
                        skillVersion={skill.skillVersion}
                        skillDescription={skill.skillDescription}
                    />
                ))}
            </WrapperSkills>
            <ModalRegistration isOpen={modal} userLogin={user.userLogin} />
        </MainContainer>
    )
};

export default Home;