import { Block } from "../../../../components/Block/Block";
import { Container } from '../../../../components/Container/Container';
import { H3 } from "../../../../components/UI/H3";
import { AdCard } from "../../../../components/AdCard/AdCard";
import { useState } from "react";
import test  from "../../../../assets/test.webp";
import { useWindowSize } from "../../../../hooks/useWindowSize";
// import { Swiper, SwiperSlide } from "swiper/react";

export const VIPads = () => {
    const [ads, setAds] = useState<any[]>([]);
    const [size] = useWindowSize();
 
    return (
        <Block>
            <Container>
                <H3>VIP-объявления</H3>
                {size > 767 ? (
                    <AdCard 
                        img={test} 
                        desc={"Гирлянда светодиодная Водопад 320 LED (3х1,5) с тепло-белым"} 
                        place={{ city: "Киев, Дарницкий", time:  `${new Date()}`, price: 1599 }} 
                        choosen={true}
                    />
                ) : (
                    <></>
                )}
            </Container>
        </Block>
    );
};