import styled from "styled-components";

type ButtonProps = {
    width?: number;
    height?: number; 
    mobileBtn?: boolean; 
    blackButton?: boolean;
    little?: boolean;
    backgroundNone?: boolean;
};

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
    ${({ backgroundNone }) => {
        if (backgroundNone) {
            return `
                width: 100%;
                background: none;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #002f34;
                max-width: 100%;
                border-radius: 4px;
                box-shadow: 0 0 0 2px #002f34;
                font-size: 16px;
                & i {
                    font-size: 24px;
                    color: #4259a6;
                    display: flex;
                    margin-right: 10px;
                }
                & > span { 
                    width: 100%;
                    align-items: center;
                    display: flex;
                    justify-content: center;
                }
                &:hover {
                    background: none;
                    & > span {
                        color: #002f34;
                    }
                }
            `;
        };
    }}
`;

export const BlackButton = styled.div`
    width: 100%;
    height: 39px;
    color: #fff;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    border-radius: 4px;
    background: #002F34;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    margin-top: 20px;
    margin-bottom: 24px;
`;