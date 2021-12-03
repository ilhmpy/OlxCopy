import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    min-height: 178px;
    position: relative;
    padding-top: 63px;
`;

export const Content = styled.div`
    width: 100%;
    min-height: 640px;
    display: flex;
    align-items: center;
    background: #f2f4f5;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & p {
        font-size: 16px;
        line-height: 1.25;
        color: #406367;
        font-weight: 400;
    }
    & svg {
        margin-bottom: 40px;
    }
`;