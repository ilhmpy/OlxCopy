import styled from "styled-components";

type ButtonProps = {
    width?: number;
    height?: number; 
    mobileBtn?: boolean; 
    blackButton?: boolean;
    little?: boolean;
}

export const Button = styled.button<ButtonProps>`
    width: ${({ width }) => width ? width : 196}px;
    height: ${({ height }) => height ? height : 46}px;
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
`;