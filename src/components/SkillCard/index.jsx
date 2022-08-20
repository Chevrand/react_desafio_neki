//Styles
import { SkillImg, StyledButton, WrapperButtons, WrapperCard, WrapperDescription } from "./styles";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

//Components
import ModalUpdate from "../ModalUpdate";

//Others
import { api } from './../../services/api';
import { useState } from 'react';

const SkillCard = ({ userSkillId, skillImg, skillName, skillLevel, skillVersion, skillDescription }) => {
    const [ modal, setModal ] = useState(false);

    const deleteUserSkill = async (userSkillId) => {
        try {
            const { data } = await api.delete(`/user-skill/${userSkillId}`);
            alert(data);
        }catch {
            alert("Não foi possível excluir a associação de skill desejada. Por favor, tente mais tarde!")
        }
    }

    const updateUserSkill = () => {
        setModal(true);
    }

    return (
        <WrapperCard>
            <WrapperButtons>
                <StyledButton  onClick={() => updateUserSkill()}><AiFillEdit /></StyledButton>
                <StyledButton onClick={() => deleteUserSkill(userSkillId)}><BsFillTrashFill /></StyledButton>
            </WrapperButtons>
            <SkillImg src={skillImg} />
            <WrapperDescription>
                <p>
                    <b>Nome: </b>
                    {skillName}
                </p>
                <p>
                    <b>Nível: </b>
                    {skillLevel}
                </p>
                <p>
                    <b>Versão: </b>
                    {skillVersion}
                </p>
                <p>
                    <b>Descrição: </b>
                    {skillDescription}
                </p>
            </WrapperDescription>
            <ModalUpdate isOpen={modal} />
        </WrapperCard>
    )
}

export default SkillCard;