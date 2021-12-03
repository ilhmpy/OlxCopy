import styled from "styled-components";
import { Media } from '../../consts/Media';

type H3Props = {
    silver?: boolean;
    white?: boolean;
    left?: boolean;
};

export const H3 = styled.h3<H3Props>`
    font-weight: 500;
    font-size: 32px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 68px;
    font-family: 'Roboto', Arial, sans-serif !important;
    ${({ left }) => left && `text-align: left;`}
    ${Media.Mobile} {
        font-size: 1.30em;
        margin-bottom: 25px;
    }
    ${({ silver, white }) => {
        if (silver) {
            return `
                font-size: 16px;
                font-weight: 500;
                line-height: 20px;
                color: #7f9799;
                display: flex;
                margin-bottom: 8px;
                ${Media.Mobile} {
                    font-size: 1em;
                    margin-bottom: 8px;
                }
            `;
        };
        if (white) {
            return `
                font-size: 20px;
                font-weight: 500;
                line-height: 20px;
                margin-bottom: 0px;
                display: flex;
                color: #fff;
            `;
        };  
    }}
`;