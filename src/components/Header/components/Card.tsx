import { ReactNode } from "react";
import styled from "styled-components";

type CardProps = {
    icon: string | null;
    children: ReactNode;
    path?: string | undefined;
}

export const Card = ({ icon, children, path }: CardProps) => {
    const handlePath = () => {
        if (path) {
            window.location.href = path;
        };
    };

    return (
        <MobileNavCard card onClick={handlePath}>
            <MobileNavCard icon>
                {icon && <i className={icon}></i>}
            </MobileNavCard>
            <MobileNavCard desc>
                {children}
            </MobileNavCard>
        </MobileNavCard>
    );
};


export const MobileNavCard = styled.div<{ desc?: boolean; icon?: boolean; card?: boolean; }>`
    ${({ card, desc, icon }) => {
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
                & > i {
                    font-size: 20px;
                }
                margin-bottom: 5px;
            `;
        };
    }}
`;