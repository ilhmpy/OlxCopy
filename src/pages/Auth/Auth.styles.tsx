import styled from "styled-components";

export const AuthContainer = styled.div`
    width: 100%;
    max-width: 400px;
    height: auto;
    background: #fff;
    border-radius: 4px;
    position: relative;
    font-size: 12px;
`;

export const AuthTabButtons = styled.div<{ tab: "auth" | "reg" }>`
    width: 100%;
    height: 58px;
    display: flex;
    position: relative;
    border-bottom: 1px solid #71848d;
    &::after {
        content: "";
        display: flex;
        width: 50%;
        bottom: -1px;
        height: 3px;
        background: #002f34;
        position: absolute;
        transition: 0.4s;
        transform: translateX(${({ tab }) => tab === "auth" ? 0 : "100%"});
    }
`;

export const AuthTabButton = styled.div<{ active: boolean; }>`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 50%;
    transition: 0.4s;
    cursor: pointer;
    font-size: 14px;
    line-height: 1.29;
    font-weight: ${({ active }) => active ? "500" : "400"};
`;

export const AuthContent = styled.div`
    width: 100%;
    height: auto;
    padding: 37px 32px 46px;
`;

export const AuthOrBorder = styled.div`
    width: 100%;
    display: flex;
    background: #d8dfe0;
    margin-top: 40px;
    height: 1px;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    &::before {
        content: "ИЛИ";
        display: flex;
        background: #fff;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        width: 90px;
        height: 15px;
    }
`;