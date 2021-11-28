import { Block } from "../../../../components/Block/Block";
import { Container } from "../../../../components/Container/Container";
import { H3 } from "../../../../components/UI/H3";
import { useState } from "react";
import { Card } from "./components/Card";
import { FlexContainer } from "../../../../components/FlexContainer/FlexContainer";

import goidalka from '../../../../assets/goidalka.png';
import animal from "../../../../assets/animal.png";
import boll from "../../../../assets/boll.png";
import bussiness from "../../../../assets/bussiness.png";
import work from "../../../../assets/case.png";
import exchange from "../../../../assets/exchange.png";
import giveaway from "../../../../assets/giveaway.png";
import house from "../../../../assets/house.png";
import key from "../../../../assets/key.png";
import mech from "../../../../assets/mech.png";
import olx from "../../../../assets/olx.png";
import phone from "../../../../assets/phone.png";
import protection from "../../../../assets/protection.png";
import xalat from "../../../../assets/xalat.png";
import car from "../../../../assets/car.png"
import newhouses from "../../../../assets/newhouses.png";

export const Rubrics = () => {
    const [rubrics, setRubrics] = useState<any[]>([
        { img: goidalka, desc: "Детский мир", bgColor: "rgb(255, 206, 50)", href: "/" },
        { img: key, desc: "Недвижимость", bgColor: "rgb(58, 119, 255)", href: "/" },
        { img: car, desc: "Авто", bgColor: "rgb(35, 229, 219)", href: "/" },
        { img: mech, desc: "Запчасти для транспорта", bgColor: "rgb(255, 86, 54)", href: "/" },
        { img: work, desc: "Работа", bgColor: "rgb(255, 246, 217)", href: "/" },
        { img: animal, desc: "Животные", bgColor: "rgb(206, 221, 255)", href: "/" },
        { img: house, desc: "Дом и сад", bgColor: "rgb(200, 248, 246)", href: "/" },
        { img: phone, desc: "Электроника", bgColor: "rgb(255, 214, 201)", href: "/" },
        { img: bussiness, desc: "Бизнес и услуги", bgColor: "rgb(255, 206, 50)", href: "/" },
        { img: xalat, desc: "Мода и стиль", bgColor: "rgb(206, 221, 255)", href: "/" },
        { img: boll, desc: "Хобби, отдых и спорт", bgColor: "rgb(200, 248, 246)", href: "/" },
        { img: giveaway, desc: "Отдам даром", bgColor: "rgb(255, 214, 201)", href: "/" },
        { img: exchange, desc: "Обмен", bgColor: "rgb(255, 246, 217)", href: "/" },
        { img: protection, desc: "Онлайн и безопасность", bgColor: "rgb(58, 119, 255)", href: "/" },
        { img: olx, desc: "OLX и доставка", bgColor: "rgb(35, 229, 219)", href: "/" },
        { img: newhouses, desc: "Новостройки", bgColor: "rgb(255, 86, 54)", href: "/" },
    ]);

    return (
        <Block>
            <Container white boxShadow>
                <H3>Главные рубрики</H3>
                <FlexContainer minHeight={430}>
                    {rubrics.map(({ img, desc, bgColor, href }, idx) => (
                        <Card key={idx} img={img} desc={desc} bgColor={bgColor} href={href} />
                    ))}
                </FlexContainer>
            </Container>
        </Block>
    );
};