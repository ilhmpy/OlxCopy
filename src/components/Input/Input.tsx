import styled from "styled-components";
import { FC, ReactNode } from "react";
import { Media } from '../../consts/Media';

type InputProps = {
    placeholder?: string;
    children: ReactNode;
    maxWidth?: number;
    paddingLeft?: number;
    boxPaddingLeft?: number;
    mobilePaddingLeft?: number;
    onlyOne?: boolean;
    opacityPlaceholder?: boolean;
}

export const Input: FC<InputProps> = ({ 
    placeholder, children, maxWidth, paddingLeft, 
    boxPaddingLeft, mobilePaddingLeft, onlyOne,
    opacityPlaceholder 
}: InputProps) => {
    return (
        <InputBox 
            maxWidth={maxWidth} boxPaddingLeft={boxPaddingLeft} 
            mobilePaddingLeft={mobilePaddingLeft}
            onlyOne={onlyOne}
        >
            {children}
            <InputField 
                opacityPlaceholder={opacityPlaceholder}
                placeholder={placeholder ? placeholder : ""} 
                paddingLeft={paddingLeft} mobilePaddingLeft={mobilePaddingLeft} 
            />
        </InputBox>
    );  
};

export const InputBox = styled.div<{ 
    maxWidth?: number; boxPaddingLeft: number | undefined; 
    mobilePaddingLeft?: number | undefined; onlyOne?: boolean | undefined; 
}>`
    width: 100%;
    height: inherit;
    position: relative;
    display: flex;
    background: #fff;
    align-items: center;
    padding-left: ${({ boxPaddingLeft }) => boxPaddingLeft ? boxPaddingLeft : "20"}px;
    border-right: 1px solid #f2f4f5;
    max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px` : "100%"};
    & > i {
        font-size: 20px;
    }
    & > svg {
        width: 25px;
        height: 25px;
    }
    ${Media.Mobile} {
        ${({ mobilePaddingLeft }) => {
            if (mobilePaddingLeft != undefined) {
                return `
                    padding-left: 0px;
                `;
            };
        }}
        ${({ onlyOne }) => {
            if (onlyOne) {
                return `
                    width: 100%;
                    height: 72px;
                `;
            };
        }}
    }
`;

export const InputField = styled.input<{ 
    paddingLeft: number | undefined; mobilePaddingLeft?: number | undefined; 
    opacityPlaceholder?: boolean;
}>`
    width: 100%;
    height: inherit; 
    display: block;
    background: #fff;
    padding-left: ${({ paddingLeft }) => paddingLeft ? paddingLeft : "40"}px;
    &::placeholder {
        color: #000;
        opacity: 80%;
        ${Media.Mobile} {
            ${({ opacityPlaceholder }) => {
                if (!opacityPlaceholder) {
                    return `
                        opacity: 0%;
                    `;
                };
            }}
        }
    }
    ${Media.Mobile} {
        font-size: 13px;
        ${({ mobilePaddingLeft }) => {
            if (mobilePaddingLeft != undefined) {
                return `
                    padding-left: 20px;
                `;
            };
        }}
    }
`;
