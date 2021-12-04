import styled from "styled-components";

export const NotifyBox = styled.div<{ call: boolean; }>`
    background: #002f34;
    color: #fff;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 20px;
    width: 80%;
    max-width: 360px;
    height: 40px;
    border-radius: 4px;
    top: 70px;
    font-weight: 400;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 999;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    transition: 1s;
    transform: translateY(${({ call }) => call ? 0 : -120}px);
    align-items: center;
    & i {
        color: #fff;
        margin-right: 15px;
        font-size: 20px;
    }
`;