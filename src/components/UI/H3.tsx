import styled from "styled-components";

type H3Props = {
    silver?: boolean;
    white?: boolean;
};

export const H3 = styled.h3<H3Props>`
    font-weight: 500;
    font-size: 32px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 68px;
    font-family: 'Roboto', Arial, sans-serif !important;
    @media (max-width: 767px) {
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
                @media (max-width: 767px) {
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