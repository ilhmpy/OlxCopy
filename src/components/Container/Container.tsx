import styled from "styled-components";
import { Media } from '../../consts/Media';

type ContainerProps = {
    white?: boolean;
    boxShadow?: boolean;
}; 

export const Container = styled.div<ContainerProps>`
    width: 100%;
    max-width: 1238px;
    height: inherit !important;
    margin: 0 auto;
    position: relative;
    ${Media.Mobile} {
        max-width: 85%;
    }
    ${({ white }) => {
        if (white) {
            return `
                background: #fff;
                padding-top: 56px;
                padding-left: 24px;
                padding-right: 24px;
                @media (max-width: 767px) {
                    padding-top: 30px;
                }
                @media (max-width: 370px) {
                    padding-left: 0px;
                    padding-right: 0px;
                }
            `;
        };
    }}
    ${({ boxShadow }) => {
        if (boxShadow) {
            return `
            `;
        };
    }}
`;