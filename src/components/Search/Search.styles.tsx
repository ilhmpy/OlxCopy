import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/search.svg";

export const SearchBlock = styled.div`
    width: 100%;
    height: 72px;
    background: #fff;
    margin-top: 120px;
    margin-bottom: 40px;
    display: flex;
    @media (max-width: 767px) {
        margin-bottom: 20px;
    }
`;

export const SearchSVG = styled(Search)`
    width: 25px;
    height: 25px;
    position: absolute;
    & svg, path {
        fill: #000 !important;
    }
`;