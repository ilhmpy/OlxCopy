import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const CantAuth = styled.a`
    color: #002F34;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    line-height: 1.29;
    margin-bottom: 20px;
    &:hover {
        text-decoration: underline;
    }
`;

export const Center = styled.div<{ notCenter?: boolean; }>`
    width: auto;
    margin: 0 auto;
    text-align: ${({ notCenter }) => notCenter ? "left" : "center"};
    color: #406367;
    font-size: 12px;
    font-weight: 400;
`;

export const A = styled.a`    
    font-size: 12px;
    font-weight: 400;
    &:hover {
        text-decoration: underline;
    }
`;

export const Flex = styled.div`
    width: 100%;
    display: flex;
`;