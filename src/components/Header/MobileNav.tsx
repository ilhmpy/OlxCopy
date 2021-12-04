import * as Styled from './Header.styles';
import { useContext } from "react";
import { SwitchLanguageComponent as SwitchLanguage } from '../SwitchLanguage/SwitchLanguage';
import { Card } from "./components/Card";
import { Routes } from "../../consts/routes";
import { AppContext } from '../../context/AppContext/AppContext';

export const MobileNav = () => {
    const { favorites } = useContext(AppContext)
    return (
        <Styled.MobileBlock>
            <Card icon={null}>
                <SwitchLanguage />
            </Card>
            <Card icon={"fas fa-comment"} path="">
                Сообщения
            </Card>
            <Card icon="far fa-heart" path={Routes.Fav} heart heartCount={favorites.length}>
                Понравившиеся
            </Card>
        </Styled.MobileBlock>
    );
};
 