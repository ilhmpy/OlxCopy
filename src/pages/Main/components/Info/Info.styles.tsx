import styled from "styled-components";
import { Media } from '../../../../consts/Media';

export const Item = styled.div`
    width: auto;
    display: flex;
    align-items: start;
    flex-direction: column;
    max-width: 589px;
    &:first-child {
        margin-right: 60px;
    }
    ${Media.Mobile} {
        margin-bottom: 50px;
        margin-right: 0px;
    }
`;

export const Img = styled.div`
    margin-bottom: 30px;
    & path {
        width: 114px;
        height: 129px;
    }
`;

export const ImgBlock = styled.img`
    margin-bottom: 40px;
    & > * {
        width: 114px;
        height: 129px;
    }
`;

export const Info = styled.h3`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    & > span {
        font-size: 14px;
        line-height: 24px; 
    }
`;

export const InfoTitle = styled.span`
    font-weight: 500;
`;