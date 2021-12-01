import styled from "styled-components";
import { FC, useState } from "react";

type FieldProps = {
    placeholder: string;
    error: boolean;
    setError: (val: boolean) => void; 
    type?: "email" | "password";
    desc: string;
    setDesc: (val: string) => void;
}

export const Field: FC<FieldProps> = ({ placeholder, type = "email", error, setError, desc, setDesc }: FieldProps) => {
    const password = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    const email = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    const phoneNumber =  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    const descs = [
        "Поле обязательно для заполнения",
        "Неправильный формат email или номера телефона",
    ];

    function handleChange(val: string) {
        if (val.length > 0) {
            if (email.test(val)) {
                setError(false);
                setDesc(descs[0]);
            } else {
                if (phoneNumber.test(val)) {
                    setError(false);
                    setDesc(descs[0]);
                } else {
                    setError(true);
                    setDesc(type === "email" ? descs[0] : "");
                };
            };
        } else {
            setError(true);
            setDesc(descs[0]);
        };  
    };

    return ( 
        <FieldContainer>
            <FieldH3>{placeholder}</FieldH3>
            <FieldInput maxLength={18} onChange={(e) => handleChange(e.target.value)} error={error} placeholder={placeholder} />
            <Valid error={error}>{desc}</Valid>
        </FieldContainer>
    );
};

const FieldContainer = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`;

const FieldInput = styled.input<{ error: boolean }>`
    width: 100%;
    height: 48px;
    padding: 14px 16px;
    background: #F2F4F5;
    border-radius: 4px;
    ${({ error }) => error ? "box-shadow: 0 2px 0 0 #de1609;" : ""}
    &:focus {
        box-shadow: 0 2px 0 0 ${({ error }) => error ? "#de1609" : "#406367"};
    }
`;

const FieldH3 = styled.h3`
    font-size: 14px;
    font-weight: 400;
    color: #71848D;
    margin-bottom: 8px;
`;

const Valid = styled.h3<{ error: boolean; }>`
    color: #C91414;
    font-size: 11px;
    font-weight: 400;
    margin-top: 10px;
    display: ${({ error }) => error ? "block" : "none"};
`;