import { Block } from "../../../../components/Block/Block";
import { Container } from '../../../../components/Container/Container';
import { H3 } from "../../../../components/UI/H3";
import { AdCard } from "../../../../components/AdCard/AdCard";
import { useState } from "react";
import test  from "../../../../assets/test.webp";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { FlexContainer } from "../../../../components/FlexContainer/FlexContainer";
// import { Swiper } from "swiper/react";

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
    const [size, setSize] = useWindowSize();
  
    return (
        <Block>
            <Container>
                <H3>VIP-объявления</H3>
                {size > 767 ? (
                    <FlexContainer>
                        {ads.map((i) => (
                            <AdCard 
                                img={i.img} 
                                desc={i.desc} 
                                place={i.place} 
                                choosen={true}
                            />
                        ))}
                    </FlexContainer>
                ) : (
                    <></>
                )}
            </Container>
        </Block>
    );
}; 