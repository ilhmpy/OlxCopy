import styled from "styled-components";
import { FC, useState } from "react";

type FieldProps = {
    placeholder: string;
    error: boolean;
    setError: (val: boolean) => void; 
    type?: "email" | "password";
    desc: string;
    setDesc: (val: string) => void;
    marginBottom?: number;
}

export const Field: FC<FieldProps> = ({ placeholder, type = "email", error, setError, desc, setDesc, marginBottom }: FieldProps) => {
    const password = /(?=.*[0-9])/;
    const email = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    const phoneNumber =  /^((8|\+[0-9])[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    const descs = [
        "Поле обязательно для заполнения",
        "Неправильный формат email или номера телефона",
        "Неверный формат пароля"
    ];

    function handleChangeEmail(val: string) {
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
                    setDesc(descs[1]);
                };
            };
        } else {
            setError(true);
            setDesc(descs[0]);
        };  
    };

    function handleChangePassword(val: string) {
        if (val.length > 0) {
            if (password.test(val)) {
                setError(false);
                setDesc(descs[0]);
            } else {
                setError(true);
                setDesc(descs[2]);
            };
        } else {
            setError(true);
            setDesc(descs[0]);
        };
    };

    return ( 
        <FieldContainer marginBottom={marginBottom}>
            <FieldH3>{placeholder}</FieldH3>
            <FieldInput 
                maxLength={18} 
                type={type === "password" ? type : ""}
                onChange={(e) => type === "email" ? handleChangeEmail(e.target.value) : handleChangePassword(e.target.value)} 
                error={error} placeholder={placeholder} 
            />
            <Valid error={error}>{desc}</Valid>
        </FieldContainer>
    );
};

const FieldContainer = styled.div<{ marginBottom: number | undefined; }>`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    ${({ marginBottom }) => {
        if (marginBottom) {
            return `
                margin-bottom: ${marginBottom}px;
            `;
        }
    }}
`;

const FieldInput = styled.input<{ error: boolean }>`
    width: 100%;
    height: 48px;
    padding: 14px 16px;
    background: #F2F4F5;
    border-radius: 4px;
    font-size: 16px;
    color: #406367;
    ${({ error }) => error ? "box-shadow: 0 2px 0 0 #de1609;" : ""}
    &::placeholder {
        font-size: 16px;
        color: #406367;
    }
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