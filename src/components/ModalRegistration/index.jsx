//Styles
import { Logo, Tittle, UpdateButton, WrapperModal } from './styles';
import imgSkill from '../../assets/skill.png';

//Components
import { InputDefault } from '../Input/styles';
import { ComboBox } from '../ComboBox/styles';

//Others
import ReactModal from 'react-modal';
import { useState } from 'react';
import { api } from './../../services/api';
import { useEffect } from 'react';

const ModalRegistration = ({ isOpen, userLogin }) => {
    const [ userSkillLevel, setUserSkillLevel ] = useState("");
    const [ skillList, setSkillList ] = useState([]);
    const [ skillName, setSkillName ] = useState("");
    
    const getSkillList = async () => {
        try {
            const { data } = await api.get("/skill");

            setSkillList(data);
        }catch {
            alert("Não foi possível consultar a lista de skills. Por favor, tente novamente!")
        }
    }

    const addUserSkill = async (userLogin, skillLevel, skillName) => {
        if(skillName === ""){
            alert("Selecione uma skill válida!");
        }else{
            try {
                const { data } = await api.post(`/user-skill`,
                    {
                        knowledgLevel: skillLevel,
                        skill: skillName,
                        user: userLogin
                    }
                );
    
                alert(data);
                refreshPage();
            } catch {
                alert("Não foi possível cadastrar a associação de skill. Por favor, verifique os campos e tente novamente!");
            }
        }
    }

    useEffect(() => {
        getSkillList();
    },[]);

    function refreshPage() {
        window.location.reload();
    }

    return (
        <ReactModal
            className={"Modal"}
            isOpen={isOpen}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => refreshPage()}
            style={
                {
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                    }
                }
            }
        >
            <WrapperModal>
                <Tittle>Associar Skill</Tittle>
                <Logo src={imgSkill} />
                <ComboBox value={skillName} onChange={(e) => setSkillName(e.target.value)}>
                    <option value="Selecione uma skill">Selecione uma skill</option>
                    {skillList.map((skill) => (
                        <option value={skill.name}>{skill.name}</option>
                    ))}
                </ComboBox>
                <InputDefault placeholder="Nível" value={userSkillLevel} onChange={(e) => setUserSkillLevel(e.target.value)} />
                <UpdateButton onClick={() => addUserSkill(userLogin, userSkillLevel, skillName)}>Salvar</UpdateButton>
            </WrapperModal>
        </ReactModal>
    )
}

export default ModalRegistration;