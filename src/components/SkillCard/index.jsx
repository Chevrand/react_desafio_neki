//Styles
import { SkillImg, StyledButton, WrapperButtons, WrapperCard, WrapperDescription } from "./styles";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

//Others
import { api } from './../../services/api';

const SkillCard = ({ userSkillId, skillImg, skillName, skillLevel, skillVersion, skillDescription }) => {
    const deleteUserSkill = async (userSkillId) => {
        try {
            const { data } = await api.delete(`/user-skill/${userSkillId}`);
            alert(data);
        }catch {
            alert("Não foi possível excluir a associação de skill desejada. Por favor, tente mais tarde!")
        }
    }

    const editUserSkill = async (userSkillId, userSkillLevel) => {
        // try {
        //     const { data } = await api.put(`/user-skill/${userSkillId}`);
        //     alert(data);
        // }catch {
        //     alert("Não foi possível editar a associação de skill desejada. Por favor, tente mais tarde!")
        // }
    }

    return (
        <WrapperCard>
            <WrapperButtons>
                <StyledButton onClick={() => editUserSkill(userSkillId)}><AiFillEdit /></StyledButton>
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
        </WrapperCard>
    )
}

export default SkillCard;