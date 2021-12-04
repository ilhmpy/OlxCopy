import styled from "styled-components";
import { Media } from "../../consts/Media";

type ButtonProps = {
    width?: number;
    height?: number; 
    mobileBtn?: boolean; 
    blackButton?: boolean;
    little?: boolean;
    backgroundNone?: boolean;
    maxWidth?: string;
    fontSize?: number;
    right?: boolean;
    display?: boolean;
};

export const Button = styled.button<ButtonProps>`
    width: ${({ width }) => width ? width : 196}px;
    height: ${({ height }) => height ? height : 46}px;
    max-width: ${({ maxWidth }) => maxWidth != undefined ? maxWidth : "100%"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: 0.5s;
    position: relative;
    border: 5px solid #fff;
    background: #fff;
    & > span {
        font-size: 16px;
        font-weight: 500;
        font-family: 'Roboto', Arial, sans-serif;
        color: #002F34;
        line-height: 20px;
    }
    &:hover {
        @media (min-width: 768px) {
            background: none;
            & > span {
                color: #fff;
            }
        }
    }
    ${({ mobileBtn }) => {
        if (mobileBtn) {
            return `
                display: none;
                ${Media.Mobile} {
                    display: flex;
                    position: absolute;
                    right: 0;
                    width: 150px;
                    height: 40px;
                    & > span {
                        font-size: 13px;
                    }
                    &:hover {
                        & > span {
                            color: #fff;
                        }
                        background: none;
                    }
                }  
            `;
        };
    }}
    ${({ blackButton }) => {
        if (blackButton) {
           return `
                width: 100%;
                height: inherit !important;
                box-shadow: none;
                border: 0;
                border-radius: 0;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding-left: 35px;
                max-width: 148px;
                color: #002f34;
                font-weight: 500;
                font-size: 16px;
                transition: 0.3s;
                & svg, path {
                    fill: #002f34 !important; 
                }
                &:hover {
                    background: #002f34;
                    & span {
                        color: #fff;
                    }
                    & svg, path { 
                        fill: #fff !important;
                    }
                }
           `; 
        };
    }}
    ${({ little }) => {
        if (little) {
            return `
                max-width: 177px;
                & > span {
                    font-size: 14px;
                }
                height: 40px;
            `;
        };
    }}
    ${({ backgroundNone, maxWidth, height, fontSize, right, display }) => {
        if (backgroundNone) {
            return `
                width: 100%;
                background: none;
                display: ${display != undefined ? display ? "flex" : "none" : "flex"};
                align-items: center;
                justify-content: center;
                color: #002f34;
                max-width: ${maxWidth != undefined ? maxWidth : "100%"};
                height: ${height ? height : 46}px;
                font-size: ${fontSize != undefined ? fontSize : "16"}px !important;
                border-radius: 4px;
                box-shadow: 0 0 0 2px #002f34;
                & > span { 
                    align-items: center;
                    display: flex;
                    height: inherit;
                    font-size: ${fontSize != undefined ? fontSize : "16"}px !important
                }
                &:hover {
                    background: none;
                    & > span {
                        color: #002f34;
                    }
                }
                ${right && `
                    position: absolute;
                    right: 0px;
                    top: 55px;
                    border: 0px solid #fff;
                    ${Media.Mobile} {
                        position: relative;
                        top: 0px;
                    }
                `}}
            `;
        };
    }}
`;



export const BlackButton = styled.div`
    width: 100%;
    height: 39px;
    color: #fff;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    border-radius: 4px;
    background: #002F34;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    margin-top: 20px;
    margin-bottom: 24px;
`;