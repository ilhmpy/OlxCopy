import styled from "styled-components";
import { ReactComponent as List } from '../../assets/list.svg';
import { ReactComponent as Blocks } from "../../assets/blocks.svg";
import { ReactComponent as WBlocks } from "../../assets/wBlocks.svg";
import { ReactComponent as WList } from '../../assets/wList.svg';
import { Media } from "../../consts/Media";

type TypeListProps = {
    setType: (val: "blocks" | "list") => void;
    type: "blocks" | "list"; 
}

export const TypeList = ({ setType, type }: TypeListProps) => {
    function handleType() {
        setType(type === "blocks" ? "list" : "blocks");
    };

    const props = {
        onClick: handleType,
    };

    return (
        <TypeListContainer>
            <p>Вид списка:</p> 
            {type === "list" ? <List {...props} /> : <WList {...props} />} 
            {type === "blocks" ? <Blocks {...props} /> : <WBlocks {...props} />}
        </TypeListContainer>
    );
};

const TypeListContainer = styled.div`
    width: 100%;
    height: 25px;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    margin-bottom: 20px;
    & p {
        font-size: 14px;
        font-weight: 400;
    }
    & svg {
        cursor: pointer;
    }
    & > * {
        margin-right: 20px;
        &:last-child {
            margin-right: 0px;
        }
    }
    ${Media.Mobile} {
        display: none;
    }
`;