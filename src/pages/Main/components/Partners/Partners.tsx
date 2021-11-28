import { Block } from "../../../../components/Block/Block";
import { Container } from "../../../../components/Container/Container";
import { MediaBlock } from "../../../../components/MediaBlock/MediaBlock";
import * as Style from "./Partners.styles";
import facebook from "../../../../assets/facebook.svg";
import youtube from "../../../../assets/youtube.svg";
import twitter from "../../../../assets/twitter.svg";

export const Partners = () => {
    return (
        <Block 
            background={"#cbf7ee"} height={415} 
            padding="80px 0px" withoutMarginBottom
        >
            <Container>
                <Style.Olx />
                <Style.TextContainer>
                    <Style.P>Сервис объявлений № 1 в Украине</Style.P>
                    <Style.P>
                        Все онлайн-объявления Украины на OLX - здесь вы найдете то, что искали! Нажав на кнопку "Подать объявление", вы сможете разместить объявление на любую тематику легко и быстро.
                    </Style.P>
                    <Style.P>
                        С помощью сервиса OLX вы сможете купить или продать из рук в руки практически все, что угодно.
                    </Style.P>
                    <Style.Socials>
                        <Style.SocialImg src={facebook} />
                        <Style.SocialImg src={youtube} />
                        <Style.SocialImg src={twitter} />
                    </Style.Socials>
                    <Style.P little>Сообщества OLX.ua в социальных сетях</Style.P>
                </Style.TextContainer>
            </Container>
        </Block>
    );
};