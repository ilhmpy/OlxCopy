import * as Style from "./Components.styles";
import { BlackButton as Button } from "../../../components/Button/Button";
import { Field } from "../../../components/Field/Field";
import { Checkbox } from "../../../components/UI/Checkbox";

export const RegTab = () => {
    return (
        <Style.Container>
            <Field placeholder="Укажите ваш email или номер телефона" />
            <Style.Flex>
                <Checkbox />
                <Style.Center notCenter>
                    * Я соглашаюсь с правилами использования сервиса, а также с 
                    передачей и обработкой моих данных в OLX.ua. Я подтверждаю своё совершеннолетие
                    и ответственность за размещение объявления
                </Style.Center>
            </Style.Flex>
            <Button style={{ marginBottom: "0px" }}>Регистрация</Button>
        </Style.Container> 
    );
};