import { Block } from "../../../../components/Block/Block";
import { Container } from "../../../../components/Container/Container";
import { FlexContainer } from "../../../../components/FlexContainer/FlexContainer";
import * as Style from "./Info.styles";
import search from "../../../../assets/searchIcon.svg";
import { ReactComponent as Tablet } from "../../../../assets/tablet.svg";

export const Info = () => {
    return (
        <Block 
            borderBottom={"1px solid #7f9799"} 
            padding={"62px 0px 90px 0px"} 
            mobilePadding={"80px 0px 50px"}
        >
            <Container>
                <FlexContainer>
                    <Style.Item>
                        <Style.Img>
                            <Tablet /> 
                        </Style.Img>                    
                        <Style.Info>
                            <Style.InfoTitle>Разделы на сервисе OLX: </Style.InfoTitle> 
                            Детский мир, Недвижимость, Авто, Запчасти для транспорта, Работа, Животные, 
                            Дом и сад, Электроника, Бизнес и услуги, Мода и стиль, Хобби, отдых и спорт, Отдам даром, Обмен
                        </Style.Info>
                    </Style.Item>
                    <Style.Item>
                        <Style.ImgBlock src={search} />
                        <Style.Info>
                            <Style.InfoTitle>Популярные запросы:</Style.InfoTitle> Playstation 4, Б у, Ps4, Диван,
                            Iphone, Пуховик, Куртка, Ботинки, Квартира, Дом, Трактор, 
                            Дрова, Видеокарта, Велосипед, Ноутбук, Платье, Ваз, Мтз, Сапоги, Диван б у 
                        </Style.Info>
                    </Style.Item>
                </FlexContainer>
            </Container> 
        </Block>
    );
};