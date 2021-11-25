import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/logo.svg";
 
export const HeaderWrap = styled.div`
    width: 100%;
    background: #002f34;
    position: fixed;
    top: 0;
    left: 0;
    height: 72px;
    right: 0;
    z-index: 100;
    transition: transform 0.5s cubic-bezier(0.8, 0.2, 0.2, 0.8);
    & > div {
        display: flex;
        align-items: center;
    }
`;

export const HeaderLinks = styled.div`
    width: 100%;
    height: inherit;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const HeaderLink = styled.a`
`;

export const Logo = styled(logo)`
    width: 71px;
    height: 41px;
    cursor: pointer;
    margin-left: -15px;
    & path {
        fill: #23e5db;
    }
`;

export const SwitchLanguage = styled.div`
    padding: 7px 12px;
    font-size: 14px;
    line-height: 1.29;
    display: flex;
    position: relative;
`;

export const SwitchItem = styled.h3<{ active: boolean; }>`
    color: #7f9799;
    font-size: 13px;
    font-weight: normal;
    &:first-child {
        margin-right: 20px;
        &::after {
            content: "";
            display: block;
            background: #7f9799;
            position: absolute;
            height: 15px;
            width: 1px;
            margin-left: auto;
            margin-right: auto;
            right: 0;
            left: 0;
            top: 10px;
        }
    }
    ${({ active }) => {
        if (active) {
            return `
                cursor: text;
            `;
        };
        if (!active) {
            return `    
                cursor: pointer;
                color: #fff;
                &:hover {
                    text-decoration: underline;
                }
            `;
        };
    }}
`;