import { ReactNode } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

type CardProps = {
    icon: string | null;
    children: ReactNode;
    path?: string | undefined;
    heart?: boolean;
    heartCount?: number;
}

export const Card = ({ icon, children, path, heart, heartCount }: CardProps) => {
    const navigate = useNavigate();
    const handlePath = () => {
        if (path) {
            navigate(path, { replace: true });
        };
    };

    return (
        <MobileNavCard card onClick={handlePath}>
            <MobileNavCard icon heart={heart != undefined} countHeart={heartCount ? heartCount : 0}>
                {icon && <i className={icon}></i>}
            </MobileNavCard>
            <MobileNavCard desc>
                {children}
            </MobileNavCard>
        </MobileNavCard>
    );
};


export const MobileNavCard = styled.div<{ desc?: boolean; icon?: boolean; card?: boolean; countHeart?: number; heart?: boolean; }>`
    ${({ card, desc, icon, countHeart, heart }) => {
        if (card) {
            return `
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center; 
                margin-right: 20px;
            `;
        };
        if (desc) {
            return `            
                font-size: 12px !important;
                color: #fff;
                font-weight: 400;
                & > * {
                    font-size: 12px !important;
                    color: #fff;
                }
            `;
        };
        if (icon) {
            return `
                color: #fff;
                position: relative;
                margin-bottom: 5px;
                & > i {
                    font-size: 20px;
                }
                ${heart && countHeart && countHeart > 0 &&
                    `& > i::after {
                        content: "${countHeart ? countHeart : ""}";
                        font-family: "Roboto", Arial, sans-serif;
                        position: absolute;
                        left: 100%;
                        right: -11px;
                        top: -11px;
                        font-weight: 400;
                        font-size: 11px;
                        margin-left: -5px;
                        background: #2769ff;
                        color: #fff;
                        padding-top: 1px;
                        box-sizing: border-box;
                        border-radius: 50%;
                        width: 20px;
                        height: 20px;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        line-height: 1;  
                    }
                `}
                margin-bottom: 5px;
            `;
        };
    }}
`;