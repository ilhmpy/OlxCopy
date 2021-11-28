import { Block } from "../../../../components/Block/Block";
import { Container } from '../../../../components/Container/Container';
import { H3 } from "../../../../components/UI/H3";
import { AdCard } from "../../../../components/AdCard/AdCard";
import { useState } from "react";
import test  from "../../../../assets/test.webp";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { FlexContainer } from "../../../../components/FlexContainer/FlexContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { MediaBlock } from "../../../../components/MediaBlock/MediaBlock";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.min.css';

export const VIPads = () => {
    const [ads, setAds] = useState<any[]>([
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
        { img: test, desc: "Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым", place: { city: "Киев, Дарницкий", time: new Date(), price: 1599 }},
    ]);
  
    return (
        <Block>
            <Container>
                <H3>VIP-объявления</H3>
                <MediaBlock showMobile={false} view={"flex"} showDesctop={true}>
                    <FlexContainer>
                        {ads.map((i, idx) => (
                            <AdCard
                                key={idx} 
                                img={i.img} 
                                desc={i.desc} 
                                place={i.place} 
                                choosen={true}
                            />
                        ))}
                    </FlexContainer>
                </MediaBlock>
                <MediaBlock showMobile={true} showDesctop={false}>
                    <Swiper 
                        navigation
                        slidesPerView={1} 
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}

                    >
                        {ads.map((i, idx) => ( 
                            <SwiperSlide key={idx}>
                                <AdCard 
                                    img={i.img} 
                                    desc={i.desc} 
                                    place={i.place} 
                                    choosen={true}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </MediaBlock>
              </Container>
        </Block>
    );
}; 