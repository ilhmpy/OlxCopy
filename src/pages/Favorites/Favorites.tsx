import * as Style from "./Favorites.styles";
import { Block } from "../../components/Block/Block";
import { Container } from "../../components/Container/Container";
import { H3 } from "../../components/UI/H3";
import { Button } from "../../components/Button/Button";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { When } from "../../components/When/When";
import { AppContext } from "../../context/AppContext/AppContext";
import { useContext } from "react";
import { TypeList } from "../../components/TypeList/TypeList";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { AdCard } from "../../components/AdCard/AdCard";
import { unical } from "../../utils/unical";
import { MediaBlock } from '../../components/MediaBlock/MediaBlock';
import { useState } from "react";
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { breakpoints } from "../../consts/breakpoints";

export const Favorites = () => {
    const { favorites, setFavorites, setCall, setText } = useContext(AppContext);
    const [type, setType] = useState<"blocks" | "list">("list");

    function onClear() {
        setFavorites([]);
    };

    function onHeart(id: number) {
        setFavorites(favorites.filter((i) => i.id !== id));
        setCall(true);
        setText("Удаленно из избранных");
    }; 

    const buttonProps = {
        onClick: onClear,
        display: favorites.length > 0,
        maxWidth: "189px", 
        height: 38, 
        fontSize: 14, 
    };

    return (
        <Block 
            styles={`padding-top: 72px;`} background={"#fff"} 
            borderBottom={"1px solid #7f9799"}
        >   
            <Style.Header>
                <Container>
                    <H3 left>Избранные объявления</H3>
                    <Button backgroundNone right {...buttonProps}>
                        <span>Очистить избранные</span>
                    </Button>
                    <Style.Links>
                        <Style.Link>Избранные объявления {favorites.length > 0 ? `(${favorites.length})` : ""} </Style.Link>
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
                    <MediaBlock showDesctop={true} showMobile={false}>
                        <When when={favorites.length > 0}>
                            <TypeList type={type} setType={setType} />
                            <FlexContainer marginBottom={40}>
                                {favorites.map((i) => (
                                    <AdCard 
                                        onHeart={() => onHeart(i.id)}
                                        img={i.img} 
                                        desc={i.desc} 
                                        place={i.place} 
                                        choosen={unical(i.id, favorites)}
                                        type={type}
                                    />
                                ))} 
                            </FlexContainer>
                        </When>
                    </MediaBlock>
                    <MediaBlock showMobile={true} showDesctop={false} flexOverflow>
                        <Swiper 
                            navigation
                            slidesPerView={1} 
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            breakpoints={breakpoints}
                        >
                        {favorites.map((i) => ( 
                            <SwiperSlide key={i.id}>
                                <AdCard 
                                    onHeart={() => onHeart(i.id)}
                                    img={i.img} 
                                    desc={i.desc} 
                                    place={i.place} 
                                    choosen={unical(i.id, favorites)}
                                />
                            </SwiperSlide>
                            ))}
                        </Swiper>
                    </MediaBlock>
                </Container>
            </Style.Content>
        </Block>
    );
};