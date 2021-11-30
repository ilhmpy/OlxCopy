import { Block } from "../../components/Block/Block";
import * as Style from "./Auth.styles";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { AuthTab } from "./components/AuthTab";
import { RegTab } from "./components/RegTab";

export const Auth = () => {
    const [tab, setTab] = useState<"auth" | "reg">("auth");

    function handleTab() {
        setTab(tab === "auth" ? "reg" : "auth");
    };

    return (
        <Block height={792} flexCenter background={"#3a77ff"}>
            <Style.AuthContainer>
                <Style.AuthTabButtons tab={tab}>
                    <Style.AuthTabButton active={tab === "auth"} onClick={handleTab}>Войти</Style.AuthTabButton>
                    <Style.AuthTabButton active={tab === "reg"} onClick={handleTab}>Регистрация</Style.AuthTabButton>
                </Style.AuthTabButtons>
                <Style.AuthContent>
                    <Button backgroundNone>
                        <span><i className="fab fa-facebook-square"></i> Вход с Facebook</span>
                    </Button>
                    <Style.AuthOrBorder />
                    {tab == "auth" && <AuthTab />}
                    {tab === "reg" && <RegTab />}
                </Style.AuthContent>
            </Style.AuthContainer>
        </Block>
    );
};