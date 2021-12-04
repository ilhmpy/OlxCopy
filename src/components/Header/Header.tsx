import { Container } from "../Container/Container";
import * as Styled from "./Header.styles";
import { useEffect, useState, useContext } from "react";
import { Button } from "../Button/Button";
import { MobileNav } from "./MobileNav";
import { SwitchLanguageComponent as SwitchLanguage } from "../../components/SwitchLanguage/SwitchLanguage";
import { Routes } from "../../consts/routes";
import { AppContext } from "../../context/AppContext/AppContext";
import { useNavigate } from "react-router";

export const Header = () => {
    const [position, setPosition] = useState<"top" | "default">("default");
    const [currentY, setCurrentY] = useState<number>(0);
    const { favorites, setFavorites } = useContext(AppContext);
    const replace = true;

    function getPosition() {
        return window.pageYOffset > currentY ? "top" : "default";
    };

    const navigate = useNavigate();

    useEffect(() => {
        setCurrentY(window.pageYOffset);
        setPosition(getPosition());
        window.addEventListener("scroll", () => {
            setPosition(getPosition());
            setCurrentY(window.pageYOffset);
        });
    }, []);

    function handleAddAd() {
        navigate(Routes.Auth, { replace });
    };

    return (
        <>
            <Styled.HeaderWrap position={position}> 
                <Container>
                    <Styled.Logo onClick={() => navigate(Routes.Main, { replace })} />
                    <Styled.HeaderLinks> 
                        <SwitchLanguage />
                        <Styled.HeaderLink>
                            <Styled.FontAwesomeBlock title="Избранные">
                                <i className="fas fa-comment"></i>
                            </Styled.FontAwesomeBlock>
                            Сообщения
                        </Styled.HeaderLink>
                        <Styled.HeaderLink>
                            <Styled.FontAwesomeBlock 
                                heart countHeart={favorites.length} 
                                onClick={() => navigate(Routes.Fav, { replace })} 
                                withoutMargin
                            >
                                <i className="far fa-heart"></i>
                            </Styled.FontAwesomeBlock>
                        </Styled.HeaderLink>
                        <Styled.HeaderLink>
                            <Styled.FontAwesomeBlock>
                                <i className="far fa-user"></i>
                            </Styled.FontAwesomeBlock>
                            Мой профиль
                        </Styled.HeaderLink>
                        <Button onClick={handleAddAd}>
                            <span>Подать объявление</span>
                        </Button>
                    </Styled.HeaderLinks>
                    <Button mobileBtn>
                        <span>Подать объявление</span>
                    </Button>
                </Container> 
            </Styled.HeaderWrap>
            <MobileNav />
        </>
    );
}; 