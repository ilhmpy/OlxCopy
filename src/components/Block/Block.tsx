import styled from "styled-components";  
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
};

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