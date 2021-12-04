import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/logo.svg";
import { Media } from '../../consts/Media';
 
export const HeaderWrap = styled.header<{ position: "top" | "default"}>`
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
    ${Media.Mobile} {
        height: 60px;
    }
`;

export const HeaderLinks = styled.div`
    width: 100%;
    height: inherit;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${Media.Mobile} {
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
    ${Media.Mobile} {
        justify-content: center;
        width: 100%;
        margin-right: 0;
        margin-bottom: 30px;
        font-weight: 300;
    }
`;

export const Logo = styled(logo)`
    width: 75px;
    height: 45px;
    cursor: pointer;
    margin-left: -6px;
    & path {
        fill: #23e5db;
    }
    ${Media.Mobile} {
        width: 45px;
        height: 45px;
        margin-left: 0;
    }
`;

export const FontAwesomeBlock = styled.div<{ withoutMargin?: boolean; heart?: boolean; countHeart?: number; }>`
    margin-right: ${({ withoutMargin }) => withoutMargin ? 0 : 15}px;
    display: block;
    position: relative;
    & > i::before {
        font-size: 19px;
    }
    ${({ heart, countHeart }) => {
        if (heart && countHeart) {
            return `
                & > i::after {
                    content: "${countHeart}";
                    font-family: "Roboto", Arial, sans-serif;
                    position: absolute;
                    left: 100%;
                    right: -11px;
                    top: -11px;
                    font-weight: 400;
                    font-size: 11px;
                    margin-left: -5px;
                    background: #2769ff;
                    color: #fff;
                    padding-top: 1px;
                    box-sizing: border-box;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    line-height: 1;  
                }
            `;
        };
    }}
`;

export const MobileBar = styled.div`
    display: none;
    position: absolute;
    right: 0;
    & > i {
        font-size: 25px;
    }
    color: #fff;
    ${Media.Mobile} {
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
    z-index: 11111;
    ${Media.Mobile} {
        display: flex;
    }
`;