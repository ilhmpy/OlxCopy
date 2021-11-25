import { Container } from "../Container/Container";
import * as Styled from "./Header.styles";
import { useHistory } from "react-router-dom"; 
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
 
export const Header = () => {
    const history = useHistory();
    const [lang, setLang] = useLocalStorage("lang", "ru");

    function handleChangeLanguage(lang: "ru" | "ua") {
        setLang(lang);
    };

    return (
        <Styled.HeaderWrap> 
            <Container>
                <Styled.Logo />
                <Styled.HeaderLinks>
                    <Styled.SwitchLanguage>
                        <Styled.SwitchItem active={lang === "ru"} onClick={() => handleChangeLanguage("ru")}>язык</Styled.SwitchItem>
                        <Styled.SwitchItem active={lang === "ua"} onClick={() => handleChangeLanguage("ua")}>мова</Styled.SwitchItem>
                    </Styled.SwitchLanguage>
                </Styled.HeaderLinks>
            </Container> 
        </Styled.HeaderWrap>
    );
}; 