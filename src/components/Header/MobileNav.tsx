import * as Styled from './Header.styles';
import { FC } from "react";
import { SwitchLanguageComponent as SwitchLanguage } from '../SwitchLanguage/SwitchLanguage';
import { Card } from "./components/Card";

export const MobileNav = () => {
    return (
        <Styled.MobileBlock>
            <Card icon={null}>
                <SwitchLanguage />
            </Card>
            <Card icon={"fas fa-comment"}>
                Сообщения
            </Card>
            <Card icon="far fa-heart">
                Понравившиеся
            </Card>
        </Styled.MobileBlock>
    );
};
 