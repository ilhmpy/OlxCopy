import { Field } from "../../../components/Field/Field";
import { BlackButton as Button } from "../../../components/Button/Button";
import * as Style from "./Components.styles";
import { useState } from "react";

export const AuthTab = () => {
    const [emError, setEmError] = useState<boolean>(true);
    const [pasError, setPasError] = useState<boolean>(false);
    const [descEmError, setDescEmError] = useState<string>("Поле обязательно для заполнения");
    const [descPasError, setDescPasError] = useState<string>("Поле обязательно для заполнения");

    return (
        <Style.Container>
            <Field 
                error={emError} setError={setEmError} 
                placeholder="Email или номер телефона" 
                desc={descEmError} setDesc={setDescEmError}
            />
            <Field 
                error={pasError} setError={setPasError} 
                type="password" placeholder="Ваш текущий пароль от OLX" 
                desc={descPasError} setDesc={setDescPasError}
            />
            <Style.CantAuth>Не можете войти?</Style.CantAuth>
            <Button>Войти</Button>
            <Style.Center>
                Входя в раздел Мой профиль, вы принимаете <Style.A>Условия использования</Style.A> сайта
            </Style.Center>
        </Style.Container>
    );
};
