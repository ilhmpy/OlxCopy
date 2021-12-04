import { Block } from "../../../../components/Block/Block";
import { Container } from '../../../../components/Container/Container';
import { H3 } from "../../../../components/UI/H3";
import { AdCard } from "../../../../components/AdCard/AdCard";
import { useState, useContext } from "react";
import test  from "../../../../assets/test.webp";
import { FlexContainer } from "../../../../components/FlexContainer/FlexContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { MediaBlock } from "../../../../components/MediaBlock/MediaBlock";
import 'swiper/swiper.min.css';
import { breakpoints } from "../../../../consts/breakpoints";
import { FavoritesViewModel } from "../../../../types/favorites";
import { AppContext } from "../../../../context/AppContext/AppContext";
import { unical } from "../../../../utils/unical";
 
export const VIPads = () => {
    const [ads, setAds] = useState<FavoritesViewModel[]>([
        { id: 0, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1600 }},
        { id: 1, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1800 }},
        { id: 2, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 2300 }},
        { id: 3, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1500 }},
        { id: 4, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 5000 }},
        { id: 5, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 3500 }},
        { id: 6, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 5300 }},
        { id: 7, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 6500 }},
        { id: 8, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 8500 }},
        { id: 9, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 10500 }},
        { id: 10, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 20000 }},
        { id: 11, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 25000 }},
        { id: 12, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 30000 }},
        { id: 13, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 35000 }},
        { id: 14, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 40000 }},
        { id: 15, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 50000 }},
        { id: 16, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 80000 }},
        { id: 17, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 120000 }},
        { id: 18, img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 135000 }},
    ]);
    const { favorites, setFavorites, call, setCall, setText } = useContext(AppContext);

    function onHeart(id: number) {
        setFavorites(unical(id, favorites) ? [...favorites, ads[id]] : favorites.filter((i) => i.id !== id));
        setCall(true);
        setText(unical(id, favorites) ? "Добавленно в избранные" : "Удаленно из избранных");
    }; 
    
    return (
        <Block>
            <Container>
                <H3>VIP-объявления</H3>
                <MediaBlock showMobile={false} view={"flex"} showDesctop={true}>
                    <FlexContainer>
                        {ads.map((i) => (
                            <AdCard
                                onHeart={() => onHeart(i.id)}
                                key={i.id} 
                                img={i.img} 
                                desc={i.desc} 
                                place={i.place} 
                                choosen={unical(i.id, favorites)}
                            />
                        ))}
                    </FlexContainer>
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
                        {ads.map((i) => ( 
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
        </Block>
    );
}; 