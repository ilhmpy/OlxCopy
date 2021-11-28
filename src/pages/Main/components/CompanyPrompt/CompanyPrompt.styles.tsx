import styled from "styled-components";
import { ReactComponent as graphic } from "../../../../assets/graphic.svg";

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
    @media (max-width: 767px) {
        justify-content: center;
        align-items: center;
    }
`;

export const Graphic = styled(graphic)`
    margin-right: 70px;
    @media (max-width: 767px) {
        margin-right: 15px;
    }
`;