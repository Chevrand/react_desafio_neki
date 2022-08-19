import { SkillImg, StyledButton, WrapperButtons, WrapperCard, WrapperDescription } from "./styles";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const SkillCard = ({ skillImg, skillName, skillLevel, skillVersion, skillDescription }) => {
    return (
        <WrapperCard>
            <WrapperButtons>
                <StyledButton><AiFillEdit /></StyledButton>
                <StyledButton><BsFillTrashFill /></StyledButton>
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