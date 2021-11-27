import { Container } from "../Container/Container";
import * as Styled from "./Header.styles";
import { useHistory } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { MobileNav } from "./MobileNav";
import { SwitchLanguageComponent as SwitchLanguage } from "../../components/SwitchLanguage/SwitchLanguage";
 
export const Header = () => {
    const history = useHistory();
    const [position, setPosition] = useState<"top" | "default">("default");

    function getPosition() {
        return window.pageYOffset >= 100 ? "top" : "default";
    };

    useEffect(() => {
        setPosition(getPosition());
        window.addEventListener("scroll", () => {
            setPosition(getPosition());
        });
    }, []);

    return (
        <>
            <Styled.HeaderWrap position={position}> 
                <Container>
                    <Styled.Logo />
                    <Styled.HeaderLinks>
                        <SwitchLanguage />
                        <Styled.HeaderLink>
                            <Styled.FontAwesomeBlock title="Избранные">
                                <i className="fas fa-comment"></i>
                            </Styled.FontAwesomeBlock>
                            Сообщения
                        </Styled.HeaderLink>
                        <Styled.HeaderLink>
                            <Styled.FontAwesomeBlock withoutMargin>
                                <i className="far fa-heart"></i>
                            </Styled.FontAwesomeBlock>
                        </Styled.HeaderLink>
                        <Styled.HeaderLink>
                            <Styled.FontAwesomeBlock>
                                <i className="far fa-user"></i>
                            </Styled.FontAwesomeBlock>
                            Мой профиль
                        </Styled.HeaderLink>
                        <Button>
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