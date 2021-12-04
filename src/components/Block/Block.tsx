import styled, { keyframes, css } from "styled-components";  
import { Media } from '../../consts/Media';

type BlockProps = {
    height?: number;
    background?: string;
    center?: boolean;
    paddingsMobile?: boolean;
    withoutMarginBottom?: boolean;
    padding?: string;
    styles?: string;
    marginBottom?: string;
    borderBottom?: string;
    mobilePadding?: string;
    flexCenter?: boolean;
    mobileMarginBottom?: number;
    backgroundAnimate?: boolean;
};

const circle = keyframes`
    from {
        width: 0px;
        height: 0px;
        opacity: 10%;
    }
    90% {
        width: 1050px;
        height: 1050px;
        opacity: 90%;
    }
    to {
        opacity: 100%;
        width: 930px;
        height: 930px;
    }
`;

export const Block = styled.div<BlockProps>`
    width: 100%;
    height: auto;
    min-height: ${({ height }) => height ? `${height}px` : "auto"};
    margin-bottom: ${({ withoutMarginBottom }) => withoutMarginBottom ? "0px" : "78px"};
    ${({ marginBottom }) => {
        if (marginBottom) {
            return `
                margin-bottom: ${marginBottom}px;  
            `;
        };
    }}
    padding: ${({ padding }) => padding ? padding : ""};
    background: ${({ background }) => background ? background : ""};
    border-bottom: ${({ borderBottom }) => borderBottom ? borderBottom : ""};
    ${({ center }) => {
        if (center) {
            return `
                text-align: center;
                justify-content: center;
                align-items: center;
                display: flex;
                & > div {
                    text-align: center;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                }
            `;
        };
    }}
    ${({ flexCenter }) => {
        if (flexCenter) {
            return `
                display: flex;
                align-items: center;
                justify-content: center;
            `;
        };
    }}
    ${({ styles }) => ( styles && styles )}
    ${({ backgroundAnimate }) => {
        if (backgroundAnimate) {
            return css`
                overflow-y: hidden;
                position: relative;
                &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    border: 150px solid #ceddff;
                    transition: 2s ease;
                    width: 0px;
                    height: 0px;
                    border-radius: 50%;
                    animation: ${circle} 2s ease-in-out;
                    animation-fill-mode: forwards;
                }
            `;
        };
    }}
    ${Media.Mobile} {
        padding: ${({ mobilePadding }) => mobilePadding};
        margin-bottom: ${({ mobileMarginBottom }) => mobileMarginBottom ? mobileMarginBottom : "30"}px;
        ${({ withoutMarginBottom }) => {
            if (withoutMarginBottom) {
                return `
                    margin-bottom: 0px;
                `;
            }
        }}
        ${({ paddingsMobile }) => {
            if (paddingsMobile) {
                return `
                    padding: 20px;
                `;
            };
        }}
    }
`;