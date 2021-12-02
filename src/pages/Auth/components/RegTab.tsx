import * as Style from "./Components.styles";
import { BlackButton as Button } from "../../../components/Button/Button";
import { Field } from "../../../components/Field/Field";
import { Checkbox } from "../../../components/UI/Checkbox";
import { useState } from "react";

export const RegTab = () => {
    const [emError, setEmError] = useState<boolean>(false);
    const [descError, setDescError] = useState<string>("");

    return (
        <Style.Container>
            <Field error={emError} desc={descError} 
                  setDesc={setDescError} setError={setEmError} 
                  placeholder="Укажите ваш email или номер телефона"
                  marginBottom={30} 
            />
            <Style.Flex>
                <Checkbox />
                <Style.Center notCenter>
                    * Я соглашаюсь <Style.A>с правилами использования сервиса</Style.A>, а также с 
                    передачей и обработкой моих данных в OLX.ua. Я подтверждаю своё совершеннолетие
                    и ответственность за размещение объявления
                </Style.Center>
            </Style.Flex>
            <Button style={{ marginBottom: "0px" }}>Регистрация</Button>
        </Style.Container> 
    );
};