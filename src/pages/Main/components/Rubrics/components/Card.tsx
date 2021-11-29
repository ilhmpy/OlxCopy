import { FC, ReactNode } from "react";
import styled from "styled-components";

type CardProps = {
    img: string;
    href: string;
    desc: string;
    bgColor: string;
};

export const Card: FC<CardProps> = ({ img, href, desc, bgColor }: CardProps) => {
    return (
        <CardBox href={href}>
            <CardImg bgColor={bgColor}>
                <Img src={img} alt={desc} />
            </CardImg>
            <CardDesc>
                {desc}
            </CardDesc>
        </CardBox>
    );
};

const CardBox = styled.a`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 125px;
    margin-bottom: 30px;
    margin-right: 5px;
    &:hover > h3 {
        background: #002F34;
        color: #fff;
    }
    @media (max-width: 767px) {
        margin-right: 0px;
    }
`;

const CardImg = styled.div<{ bgColor: string; }>`
    width: 100%;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 29px;
    background-color: ${({ bgColor }) => bgColor};
`;

const CardDesc = styled.h3`
    width: auto;
    display: block;
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    margin: 0 auto;
    color: #002F34;
    @media (max-width: 767px) {
        font-size: .90em;
    }
`;

const Img = styled.img`
    width: 88px;
    height: 88px;
`;