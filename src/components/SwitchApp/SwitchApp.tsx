import styled from "styled-components";
import { ReactComponent as GooglePlay } from "../../assets/googleplay.svg";
import { ReactComponent as AppStore } from "../../assets/appstore.svg";
import { useState } from "react";

export const SwitchApp = () => {
    const [desc, setDesc] = useState<string | undefined>();

    function handleMouseOver(app: string) {
        setDesc(app);
    };

    function handleMouseLeave() {
        setDesc(undefined);
    };

    const handles = {
        onMouseOver: (e: any) => handleMouseOver(e.currentTarget.dataset.app),
        onMouseLeave: (e: any) => handleMouseLeave()
    }

    return (
        <SwitchContainer>
            <GooglePlay data-app="Google Play" {...handles} />
            <AppStore data-app="App Store" {...handles} />
            <Desc>
                {desc ? 
                    "Скачайте в" : 
                    "Бесплатное приложение для твоего телефона"}
                {desc && <AppName>{desc}</AppName>}
            </Desc>
        </SwitchContainer>
    )
};

const SwitchContainer = styled.div`
    & svg {
        cursor: pointer;
        width: 140px;
        height: 48px;
        margin-right: 10px;
    }
    @media (max-width: 767px) {
        margin: 0 auto;
        margin-top: 15px;
    }
`;

const Desc = styled.h3`
    color: #8E8E8E;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    margin-top: 3px;
    font-weight: 400;
`;

const AppName = styled.h3`
    font-size: 12px;
    font-weight: 500;
    color: #002f34;
`;
