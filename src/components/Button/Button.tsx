import styled from "styled-components";

export const Button = styled.button<{ width?: number; height?: number; mobileBtn?: boolean; }>`
    width: ${({ width }) => width ? width : 196}px;
    height: ${({ height }) => height ? height : 46}px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: 0.5s;
    border: 5px solid #fff;
    background: #fff;
    & > span {
        font-size: 16px;
        font-weight: 500;
        font-family: 'Roboto', Arial, sans-serif;
        color: #002F34;
        opacity: 85%;
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
                @media (max-width: 767px) {
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
`;