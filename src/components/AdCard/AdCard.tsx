import { Path } from "history";
import styled from "styled-components";
import { FC } from 'react';
import moment from "moment";

type AdCardProps = {
    img: string;
    desc: string;
    place: any;
    choosen: boolean;
}

export const AdCard: FC<AdCardProps> = ({ img, desc, place, choosen }: AdCardProps) => {
    return (
        <Card>
            <CardImg src={img} />
            <CardDesc>{desc}</CardDesc>
            <CardPlace>{place.city}, Вчера - {moment(place.time).format("HH:MM")}</CardPlace>
            <CardPrice>{place.price} грн.</CardPrice>
            <CardHeart choosen={choosen} />
        </Card>
    );  
};

const Card = styled.div`
    width: 100%;
    max-width: 298px;
    height: 378px;
    background: #fff;
    margin-right: 15px;
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 4px;
`;  

const CardImg = styled.img`
    width: 100%;
    height: 218px;
`;

const CardDesc = styled.h3`
    margin-top: 15px;
    margin-bottom: 30px;
    font-size: 16px;
    line-height 20px;
    font-style: normal;
    font-weight: normal;
`;

const CardPlace = styled.h3`
    font-size: 12px;
    color: #406367;
    line-height: 1.17;
    margin-bottom: 10px;
    font-weight: normal;
`;

const CardPrice = styled.h3`
    font-size: 16px;
    font-weight: 500;
`;

const CardHeart = styled.span<{ choosen: boolean; }>`

`;
