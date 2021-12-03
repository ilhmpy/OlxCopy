import * as Styled from './Header.styles';
import { FC } from "react";
import { SwitchLanguageComponent as SwitchLanguage } from '../SwitchLanguage/SwitchLanguage';
import { Card } from "./components/Card";
import { Routes } from "../../consts/routes";

export const MobileNav = () => {
    return (
        <Styled.MobileBlock>
            <Card icon={null}>
                <SwitchLanguage />
            </Card>
            <Card icon={"fas fa-comment"} path="">
                Сообщения
            </Card>
            <Card icon="far fa-heart" path={Routes.Fav}>
                Понравившиеся
            </Card>
        </Styled.MobileBlock>
    );
};
 