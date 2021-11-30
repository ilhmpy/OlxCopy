import { Field } from "../../../components/Field/Field";
import { BlackButton as Button } from "../../../components/Button/Button";
import * as Style from "./Components.styles";

export const AuthTab = () => {
    return (
        <Style.Container>
            <Field placeholder="Email или номер телефона" />
            <Field type="password" placeholder="Ваш текущий пароль от OLX" />
            <Style.CantAuth>Не можете войти?</Style.CantAuth>
            <Button>Войти</Button>
            <Style.Center>
                Входя в раздел Мой профиль, вы принимаете <Style.A>Условия использования</Style.A> сайта
            </Style.Center>
        </Style.Container>
    );
};
