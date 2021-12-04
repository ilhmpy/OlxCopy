import * as Style from "./Favorites.styles";
import { Block } from "../../components/Block/Block";
import { Container } from "../../components/Container/Container";
import { H3 } from "../../components/UI/H3";
import { Button } from "../../components/Button/Button";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { When } from "../../components/When/When";
import { AppContext } from "../../context/AppContext/AppContext";
import { useContext } from "react";

export const Favorites = () => {
    const { favorites, setFavorites} = useContext(AppContext);

    function onClear() {
        setFavorites([]);
    };

    return (
        <Block 
            styles={`padding-top: 72px;`} background={"#fff"} 
            borderBottom={"1px solid #7f9799"}
        >   
            <Style.Header>
                <Container>
                    <H3 left>Избранные объявления</H3>
                    <Button 
                        onClick={onClear}
                        display={favorites.length > 0} 
                        maxWidth={"189px"} right height={38} fontSize={14} backgroundNone
                    >
                        <span>Очистить избранные</span>
                    </Button>
                    <Style.Links>
                        <Style.Link>Избранные объявления</Style.Link>
                    </Style.Links>
                </Container>
            </Style.Header>
            <Style.Content>
                <Container>
                    <When when={!(favorites.length > 0)}>
                        <Style.NotAds>
                            <Heart />
                            <H3 center>Нет избранных объявлений</H3>
                            <p>Добавить в избранное можно со страницы объявления либо со страницы списка объявлений</p>
                            <p>
                                Теперь избранные объявления всегда доступны на любом компьютере, а также на мобильной 
                                версии сайта, после входа в Мои объявления
                            </p>
                        </Style.NotAds>
                    </When>
                    <When when={favorites.length > 0}>

                    </When>
                </Container>
            </Style.Content>
        </Block>
    );
};