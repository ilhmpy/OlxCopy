import styled from "styled-components";
import { ReactComponent as olx} from "../../../../assets/blackLogo.svg";

export const Olx = styled(olx)`
    margin: 0 auto;
    margin-bottom: 50px; 
    display: block;
`;

export const TextContainer = styled.div`
    max-width: 820px;
    margin: 0 auto;
`;

export const P = styled.p<{ little?: boolean; }>`
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 5px;
    ${({ little }) => {
        if (little) {
            return `
                font-size: 11px;
                color: #4e4e4e;
            `;
        };
    }}
`;

export const SocialImg = styled.img`
    width: 79px;
    height: 25px;
    margin-right: 20px;
    cursor: pointer;
    filter: grayscale(100%);
    opacity: .5;
    text-indent: -9999em;
    &:hover {
        filter: grayscale(0);
        opacity: 1;
    }
`;

export const Socials = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;