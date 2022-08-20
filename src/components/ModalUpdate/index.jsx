//Styles
import { Logo, Tittle, UpdateButton, WrapperModal } from './styles';
import imgUpdate from '../../assets/update.png';

//Components
import { InputDefault } from '../Input/styles';

//Others
import ReactModal from 'react-modal';
import { useState } from 'react';
import { api } from './../../services/api';

const ModalUpdate = ({ isOpen, userSkillId }) => {
    const [ userSkillLevel, setUserSkillLevel ] = useState("");

    function refreshPage() {
        window.location.reload();
    }

    const updateUserSkill = async (userSkillId, userSkillLevel) => {
        try {
            const { data } = await api.put(`/user-skill/${userSkillId}`,
                {
                    knowledgLevel: userSkillLevel
                }
            );
            
            alert(data);
            refreshPage();
        } catch {
            alert("Não foi possível atualizar a associação de skill. Somente São aceitos valores numéricos!");
        }
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
                <Tittle>Editar Skill</Tittle>
                <Logo src={imgUpdate} />
                <InputDefault placeholder="Nível" value={userSkillLevel} onChange={(e) => setUserSkillLevel(e.target.value)} />
                <UpdateButton onClick={() => updateUserSkill(userSkillId, userSkillLevel)}>Atualizar</UpdateButton>
            </WrapperModal>
        </ReactModal>
    )
}

export default ModalUpdate;