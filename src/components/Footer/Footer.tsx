import { Block } from "../Block/Block";
import { Container } from "../Container/Container";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import { SwitchApp } from "../SwitchApp/SwitchApp";
import * as Style from "./Footer.styles";

export const Footer = () => {
    return (
        <Block mobileMarginBottom={110}>
            <Container> 
                <FlexContainer>
                    <Style.LinksBox>
                        <Style.Link>Мобильные приложения</Style.Link>
                        <Style.Link>Помощь и Обратная связь</Style.Link>
                        <Style.Link>Платные услуги</Style.Link>
                        <Style.Link>OLX PRO</Style.Link>
                        <Style.Link>Бизнес на OLX</Style.Link>
                        <Style.Link>Для прессы</Style.Link>
                        <Style.Link>Реклама на сайте</Style.Link>
                        <Style.Link>Блог OLX</Style.Link>
                        <Style.Link>Условия использования</Style.Link>
                        <Style.Link>Политика конфиденциальности</Style.Link>
                        <Style.Link blue>
                            <span>Партнёры 	&#9660;</span>
                        </Style.Link>
                    </Style.LinksBox>
                    <Style.LinksBox>
                        <Style.Link>Как продавать и покупать?</Style.Link>
                        <Style.Link>Правила безопасности</Style.Link>
                        <Style.Link>Карта сайта</Style.Link>
                        <Style.Link>Карта регионов</Style.Link>
                        <Style.Link>Популярные запросы</Style.Link>
                        <Style.Link>Работа в OLX</Style.Link>
                    </Style.LinksBox>
                    <SwitchApp />
                </FlexContainer>
            </Container>
        </Block>
    );
};