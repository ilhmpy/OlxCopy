import styled from "styled-components";
import { Media } from '../../consts/Media';

export const LinksBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 60px;
    ${Media.Mobile} {
        margin-right: 0px;
        text-align: center;
        margin: 0 auto;
    }
`;

export const Link = styled.a<{ blue?: boolean; }>`
    display: block;
    margin-bottom: 15px;
    ${({ blue }) => {
        if (blue) {
            return `
                & > span {
                    border-bottom: 1px dashed #c8c8c8;
                }
                &:hover {
                    color: #00BFFF;
                }  
            `;
        };
    }}
`;