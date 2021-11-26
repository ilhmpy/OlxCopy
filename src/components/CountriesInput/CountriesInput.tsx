import styled from "styled-components";
import { Input } from "../Input/Input";
import { FC } from "react";

type CountriesInputProps = {
    noneOnMobile?: boolean;
    onlyOne?: boolean;
    opacityPlaceholder?: boolean;
}

export const CountriesInput: FC<CountriesInputProps> = ({ noneOnMobile, onlyOne, opacityPlaceholder }: CountriesInputProps) => { 
    return (
        <CountriesContainer noneOnMobile={noneOnMobile}>
            <Input
                placeholder={`Вся украина`} 
                paddingLeft={20} 
                boxPaddingLeft={30}
                onlyOne={onlyOne}
                opacityPlaceholder={opacityPlaceholder}
            >
                <i className="fas fa-map-marker-alt"></i>
            </Input>
        </CountriesContainer>
    );
};

const CountriesContainer = styled.div<CountriesInputProps>`
    width: 100%;
    max-width: 338px;
    height: inherit;
    display: flex;
    @media (max-width: 767px) {
        ${({ noneOnMobile }) => {
            if (noneOnMobile) {
                return `
                    display: none;
                `;
            };
        }}
    }
`;