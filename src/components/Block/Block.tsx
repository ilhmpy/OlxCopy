import styled from "styled-components";  

type BlockProps = {
    height?: number;
    background?: string;
    center?: boolean;
    paddingsMobile?: boolean;
    withoutMarginBottom?: boolean;
}

export const Block = styled.div<BlockProps>`
    width: 100%;
    height: auto;
    min-height: ${({ height }) => height ? `${height}px` : "auto"};
    margin-bottom: ${({ withoutMarginBottom }) => withoutMarginBottom ? "0px" : "78px"};
    background: ${({ background }) => background ? background : ""};
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
    @media (max-width: 767px) {
        margin-bottom: ${({ withoutMarginBottom }) => withoutMarginBottom ? "0px" : "30px"};
        ${({ paddingsMobile }) => {
            if (paddingsMobile) {
                return `
                    padding: 20px;
                `;
            };
        }}
    }
`;