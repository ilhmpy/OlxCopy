import styled from "styled-components";

export const LinksBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 60px;
    @media (max-width: 767px) {
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