import styled from "styled-components";
import { FC } from "react";

type FieldProps = {
    placeholder: string;
    type?: "email" | "password";
}

export const Field: FC<FieldProps> = ({ placeholder, type = "email" }: FieldProps) => {
    return (
        <FieldContainer>
            <FieldH3>{placeholder}</FieldH3>
            <FieldInput error={false} placeholder={placeholder} />
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