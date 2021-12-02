import styled from "styled-components";
import { useState } from "react";

export const Checkbox = () => {
    const [active, setActive] = useState<boolean>(false);
    return ( 
        <CheckboxContainer onClick={() => setActive(!active)} active={active} />
    );
};

const CheckboxContainer = styled.div<{ active: boolean; }>`
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    margin-right: 20px;
    border-radius: 4px;
    border: 2px solid #002f34;
    display: inline-block;
    position: relative;
    background: ${({ active }) => active ? "#002f34" : ""};
    cursor: pointer;
    &::before {
        top: 8px;
        left: 3px;
        transform: rotate(-45deg);
        background: #fff;
        height: ${({ active }) => active ? 9 : 0}px;
        transition: 0.2s ease;
        position: absolute;
        width: 2px;
        content: "";
        border-radius: 3px;
    }
    &::after {
        height: ${({ active }) => active ? 15 : 0}px;
        transition: 0.4s ease;
        background: #fff;
        content: "";
        top: 3px;
        left: 11px;
        transform: rotate(-135deg);
        position: absolute;
        width: 2px;
        border-radius: 3px;
    }
`;

