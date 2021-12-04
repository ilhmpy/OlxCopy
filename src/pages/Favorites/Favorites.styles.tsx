import styled from "styled-components";
import { Media } from "../../consts/Media";

export const Header = styled.header`
    width: 100%;
    min-height: 178px;
    position: relative;
    padding-top: 63px;
`;

export const Content = styled.div`
    width: 100%;
    min-height: 640px;
    padding-top: 20px;
    display: flex;
    background: #f2f4f5;
    ${Media.Mobile} {
        padding-top: 30px;
        min-height: auto;
    }
`;

export const Links = styled.div`
    width: 100%;
    display: flex;
`;

export const Link = styled.a`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    max-width: 195px;
    height: 56px;
    font-size: 14px;
    border-bottom: 2px solid #002f34;
`;

export const NotAds = styled.div`
    width: 100%;
    max-width: 1238px;
    text-align: center;
    padding-top: 10%;
    height: inherit;
    & p {
        font-size: 16px;
        line-height: 1.25;
        color: #406367;
        font-weight: 400;
    }
    & svg {
        margin-bottom: 40px;
    }
    ${Media.Mobile} {
        margin-bottom: 30%;
    }
`;