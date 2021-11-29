import styled from "styled-components";
import { ReactComponent as graphic } from "../../../../assets/graphic.svg";
import { Media } from '../../../../consts/Media';

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
    ${Media.Mobile} {
        justify-content: center;
        align-items: center;
    }
`;

export const Graphic = styled(graphic)`
    margin-right: 70px;
    min-width: 100px;
    min-height: 100px;
    ${Media.Mobile} {
        margin-right: 15px;
    }
`;