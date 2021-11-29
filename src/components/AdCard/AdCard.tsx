import styled from "styled-components";
import { FC, useState } from 'react';
import { Media } from "../../consts/Media";
import moment from "moment";

type AdCardProps = {
    img: string;
    desc: string;
    place: any;
    choosen: boolean;
}

export const AdCard: FC<AdCardProps> = ({ img, desc, place, choosen }: AdCardProps) => {
    const [view, setView] = useState<boolean>(false);

    function handleMouse() {
        setView(!view);
    };

    return (
        <Card>
            <CardImg src={img} />
            <CardDesc href="">{desc}</CardDesc>
            <CardPlace>{place.city}, Вчера - {moment(place.time).format("HH:MM")}</CardPlace>
            <CardPrice>{place.price} грн.</CardPrice>
            <Prompt view={view}>В избранные</Prompt>
            <CardHeart 
                onMouseOver={handleMouse} onMouseOut={handleMouse} 
                className="far fa-heart" choosen={choosen} 
            />
        </Card>
    );  
};

const Card = styled.div`
    width: 100%;
    max-width: 298px;
    min-width: 298px;
    height: 378px;
    background: #fff;
    margin-right: 15px;
    margin-bottom: 15px;
    padding: 15px;
    position: relative;
    border-radius: 4px;
    ${Media.Mobile} {
        margin: 0 auto;
        margin-bottom: 30px;
    }
    &:nth-child(4n) {
        margin-right: 0px;
    }
`;  

const CardImg = styled.img`
    width: 100%;
    height: 218px;
    margin-bottom: 15px;
`;

const CardDesc = styled.a`
    font-size: 16px;
    line-height 20px;
    width: auto;
    font-style: normal;
    font-weight: normal;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 251px;
    cursor: pointer;
    &:hover {
        background: #002f34;
        color: #fff;
    }
`;

const CardPlace = styled.h3`
    font-size: 12px;
    color: #406367;
    line-height: 1.17;
    margin-bottom: 10px;
    font-weight: normal;
    margin-top: 30px;
`;

const CardPrice = styled.h3`
    font-size: 16px;
    font-weight: 500;
`;

export const Prompt = styled.div<{ view: boolean; }>`
    position: absolute;
    background: #3a77ff;
    margin-bottom: 10px;
    min-height: 40px;
    color: #fff;
    width: 120px;
    justify-content: center;
    align-items: center;
    line-height: 1.29;
    border-radius: 4px;
    font-size: 14px;
    bottom: 42px;
    right: -75px;
    z-index: 999;
    font-weight: 400;
    display: ${({ view }) => view ? "flex" : "none"};
    ${Media.Mobile} {
        right: 10px;
    }
    &::before {
        width: 0;
        height: 0;
        position: absolute;
        border-style: solid;
        content: '';
        left: 12px;
        bottom: -10px;
        z-index: 9999;
        border-width: 10px 7px 0 7px;
        border-color: #3a77ff transparent transparent transparent;
        ${Media.Mobile} {
            left: 97px;
        }
    }
`;

const CardHeart = styled.i<{ choosen: boolean; }>`
    position: absolute;
    right: 0;
    font-size: 22px;
    color: #c6c6c6;
    cursor: pointer;
    bottom: 15px;
    right: 15px;
    &:hover {
        color: inherit;
    }
`;