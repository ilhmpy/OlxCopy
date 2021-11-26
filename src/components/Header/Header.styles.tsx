import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/logo.svg";
 
export const HeaderWrap = styled.div<{ position: "top" | "default"}>`
    width: 100%;
    background: #002f34;
    transition: transform 0.5s cubic-bezier(0.8, 0.2, 0.2, 0.8);
    position: fixed;
    transform: ${({ position }) => `translateY(${position === "top" ? -100 : 0}%)`};
    top: 0;
    left: 0;
    height: 72px;
    right: 0;
    z-index: 100;
    & > div {
        display: flex;
        align-items: center;
    }
    @media (max-width: 767px) {
        height: 60px;
    }
`;

export const HeaderLinks = styled.div`
    width: 100%;
    height: inherit;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 767px) {
        display: none;
    }
`;

export const HeaderLink = styled.a`
    color: #fff;
    display: flex;
    transition: 0.2s;
    font-size: 16px;
    margin-right: 40px;
    align-items: center;
    &:hover {
        color: #7F9799;
    }
    @media (max-width: 767px) {
        justify-content: center;
        width: 100%;
        margin-right: 0;
        margin-bottom: 30px;
        font-weight: 300;
    }
`;

export const Logo = styled(logo)`
    width: 71px;
    height: 41px;
    cursor: pointer;
    margin-left: -3px;
    & path {
        fill: #23e5db;
    }
    @media (max-width: 767px) {
        width: 45px;
        height: 45px;
        margin-left: 0;
    }
`;

export const FontAwesomeBlock = styled.div<{ withoutMargin?: boolean; }>`
    margin-right: ${({ withoutMargin }) => withoutMargin ? 0 : 15}px;
    & > i::before {
        font-size: 22px;
    }
`;

export const MobileBar = styled.div`
    display: none;
    position: absolute;
    right: 0;
    & > i {
        font-size: 25px;
    }
    color: #fff;
    @media (max-width: 767px) {
        display: flex;
    }
`;

export const MobileBlock = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    background: #002f34;
    display: none;
    transition: 1s ease-in-out;
    align-items: center;
    justify-content: center;
    bottom: 0;
    @media (max-width: 767px) {
        display: flex;
    }
`;