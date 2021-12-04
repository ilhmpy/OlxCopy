import { FC } from "react";
import * as Style from "./Notify.styles";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext/AppContext"; 

type NotifyProps = {
    call: boolean;
    text: string;
};

export const Notify: FC<NotifyProps> = ({ call, text }: NotifyProps) => {
    const [timer, setTimer] = useState<any>();
    const { setCall } = useContext(AppContext);

    useEffect(() => {
        if (call === true) {
            setTimer(setTimeout(() => setCall(false), 3000));
        } 
    }, [call]);

    return (
        <Style.NotifyBox call={call}>
            <i className="fas fa-check-square"></i>
            {text}
        </Style.NotifyBox>
    );
};