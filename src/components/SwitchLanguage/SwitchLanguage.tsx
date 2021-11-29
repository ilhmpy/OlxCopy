import styled from "styled-components";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Media } from '../../consts/Media';

export const SwitchLanguageComponent = () => {
    const [lang, setLang] = useLocalStorage("lang", "ru");
    
    function handleChangeLanguage(lang: "ru" | "ua") {
        setLang(lang);
    };
    
    return (
        <SwitchLanguage>
            <SwitchItem active={lang === "ru"} onClick={() => handleChangeLanguage("ru")}>язык</SwitchItem>
            <SwitchItem active={lang === "ua"} onClick={() => handleChangeLanguage("ua")}>мова</SwitchItem> 
        </SwitchLanguage>
    )
}; 

const SwitchLanguage = styled.div`
    padding: 7px 12px;
    font-size: 14px;
    line-height: 1.29;
    display: flex;
    margin-right: 40px;
    position: relative;
    ${Media.Mobile} {
        margin-right: 0;
    }
`;

const SwitchItem = styled.h3<{ active: boolean; }>`
    color: #7f9799;
    font-size: 13px;
    font-weight: normal;
    &:first-child {
        margin-right: 30px;
        &::after {
            content: "";
            display: block;
            background: #7f9799;
            position: absolute;
            height: 15px;
            width: 1px;
            margin-left: auto;
            margin-right: auto;
            right: 0;
            left: 0;
            top: 10px;
        }
    }
    ${({ active }) => {
        if (active) {
            return `
                cursor: text;
            `;
        };
        if (!active) {
            return `    
                cursor: pointer;
                color: #fff;
                &:hover {
                    text-decoration: underline;
                }
            `;
        };
    }}
`;