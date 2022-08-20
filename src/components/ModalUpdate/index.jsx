//Styles
import { Logo, Tittle, UpdateButton, WrapperModal } from './styles';
import imgUpdate from '../../assets/update.png';

//Components
import { InputDefault } from '../Input/styles';

//Others
import ReactModal from 'react-modal';
import { useState } from 'react';

const ModalUpdate = ({ isOpen, userSkillId }) => {
    const [ modalActive, setModalActive ] = useState(true);
    const [ userSkillLevel, setUserSkillLevel ] = useState("");

    const updateUserSkill = async (userSkillId, UserSkillLevel) => {
        try {

            setModalActive(false);
        }catch {

        }
    }

    return (
        <ReactModal
            className={"Modal"}
            isOpen={isOpen}
            style={
                {
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                    },
                    content: {
                    }
                }
            }
        >
            <WrapperModal>
                <Tittle>Editar Skill</Tittle>
                <Logo src={imgUpdate} />
                <InputDefault placeholder="Nível" value={userSkillLevel} onChange={(e) => setUserSkillLevel(e.target.value)}/>
                <UpdateButton>Atualizar</UpdateButton>
            </WrapperModal>
        </ReactModal>
    )
}

export default ModalUpdate;