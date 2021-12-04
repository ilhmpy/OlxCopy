import styled from "styled-components";
import { FC, useState } from 'react';
import { Media } from "../../consts/Media";
import moment, { months } from "moment";
import { monthsShort } from "../../consts/months";

type AdCardProps = {
    img: string;
    desc: string;
    place: any;
    choosen: boolean;
    onHeart?: () => void;
    type?: "blocks" | "list"; 
};

export const AdCard: FC<AdCardProps> = ({ img, desc, place, choosen, onHeart, type = "blocks" }: AdCardProps) => {
    const [view, setView] = useState<boolean>(false);

    function handleMouse() {
        setView(!view);
    };

    const heartProps = {
        onClick: onHeart,
        onMouseOver: handleMouse,
        onMouseOut: handleMouse,
        className: choosen ? "far fa-heart" : "fas fa-heart",
        choosen: choosen,
    };

    return (
        <>
            {type === "blocks" ? (
                <Card>
                    <CardImg src={img} />
                    <CardDesc href="">{desc}</CardDesc>
                    <CardPlace>{place.city}, Вчера - {moment(place.time).format("HH:MM")}</CardPlace>
                    <CardPrice>{place.price} грн.</CardPrice>
                    <Prompt choosen={choosen} view={view}>{choosen ? "В избранные" : "Удалить из избранных"}</Prompt>
                    <CardHeart {...heartProps} />
                </Card>
            ) : (
                <Card list>
                    <CardImg src={img} />
                    <ListContainer>
                        <CardDesc href="" list>{desc}</CardDesc>
                        <CardPlace silver>{place.city}</CardPlace>
                        <CardPlace abs>
                            {place.city}, {moment(place.time).format("DD")} - {monthsShort[moment(place.time).month()]}
                        </CardPlace>
                        <CardPrice>{place.price} грн.</CardPrice>
                        <CardHeartDesc view={view}>Удалить из избранных</CardHeartDesc>
                        <CardHeart {...heartProps} />
                    </ListContainer>
                </Card>
            )}
        </>
    );  
};

const CardHeartDesc = styled.h3<{ view: boolean; }>`
    position: absolute;
    bottom: 6px;
    right: 40px;
    color: #aaaaaa;
    font-size: 13px;
    font-weight: 400;
    display: ${({ view }) => view ? "block" : "none"};
`;

const ListContainer = styled.div`
    width: 100%;
    position: relative;
    height: auto;
    padding-top: 5px;
`;

const CardImg = styled.img`
    width: 100%;
    height: 218px;
    margin-bottom: 15px;
`;

const CardDesc = styled.a<{ list?: boolean; }>`
    font-size: 16px;
    line-height 20px;
    width: auto;
    font-style: normal;
    font-weight: normal;
    text-overflow: ellipsis;
    overflow: hidden;
    ${({ list }) => !list && `
        max-width: 251px;
    `}
    cursor: pointer;
    &:hover {
        background: #002f34;
        color: #fff;
    }
`;

const CardPlace = styled.h3<{ silver?: boolean; abs?: boolean; }>`
    font-size: 12px;
    color: #406367;
    line-height: 1.17;
    margin-bottom: 10px;
    font-weight: normal;
    margin-top: 30px;
    ${({ silver }) => silver && `
        font-size: 13px;
        color: #b4b4b4; 
        margin-top: 5px;
        width: auto;
    `}
    ${({ abs }) => abs && `
        position: absolute;
        bottom: 0px;
        margin-top: 0px;
    `}
`;

const CardPrice = styled.h3`
    font-size: 16px;
    font-weight: 500;
`;

export const Prompt = styled.div<{ view: boolean; choosen: boolean; }>`
    position: absolute;
    background: #3a77ff;
    margin-bottom: 10px;
    min-height: 40px;
    color: #fff;
    width: auto;
    padding: 10px;
    min-width: 120px;
    justify-content: center;
    align-items: center;
    line-height: 1.29;
    border-radius: 4px;
    font-size: 14px;
    bottom: 42px;
    right: ${({ choosen }) => choosen ? "-75px" : "-124px"};
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
            ${({ choosen }) => {
                if (!choosen) {
                    return `
                        left: 145px;
                    `;
                };
            }}
        }
    }
`;

const CardHeart = styled.i<{ choosen: boolean; }>`
    position: absolute;
    right: 0;
    font-size: 22px;
    color: ${({ choosen }) => choosen ? "#c6c6c6" : "#002f34"};
    cursor: pointer;
    bottom: 15px;
    right: 15px;
    &:hover {
        color: inherit;
    }
`;

const Card = styled.div<{ list?: boolean; }>`
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
    ${({ list }) => {
        if (list) {
            return `
                position: relative;
                width: 100%;
                max-width: 100%;
                min-width: 100%;
                height: 168px;
                margin-bottom: 10px;
                padding: 10px;
                display: flex;
                ${CardImg} {
                    max-width: 216px;
                    height: auto;
                    margin-bottom: 0px;
                    margin-right: 10px;
                }
                ${CardDesc} {
                    width: auto;
                    height: auto;
                    height: 20px;
                    font-size: 20px;
                }
                ${CardPrice} {
                    position: absolute;
                    right: 10px;
                    top: 5px;
                }
                ${CardHeart} {
                    bottom: 5px;
                    right: 5px;
                }
            `;
        } else {
           return `
            ${Media.Mobile} {
                margin: 0 auto;
                margin-bottom: 30px;
            }
            &:nth-child(4n) {
                margin-right: 0px;
            }
           `;
        };
    }}
`;  