import { Block } from "../../components/Block/Block";
import { Container } from "../../components/Container/Container";
import * as Styled from "./Search.styles";
import { useState } from "react";
import { CountriesInput } from "../CountriesInput/CountriesInput";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Search = () => {
    const [addsCount, setAddCount] = useState<number>(0);
    const [size, setSize] = useWindowSize();
    return (
        <Block>
            <Container> 
                <Styled.SearchBlock>
                    <Input placeholder={`${addsCount} объявлений рядом`} maxWidth={752} mobilePaddingLeft={0}>
                        {size > 767 && (
                            <Styled.SearchSVG />
                        )}
                    </Input> 
                    <CountriesInput noneOnMobile />
                    <Button blackButton>
                        <span>Поиск</span>
                        <Styled.SearchSVG style={{ marginLeft: "60px" }} />
                    </Button>
                </Styled.SearchBlock>
                {size < 767 && (
                    <CountriesInput opacityPlaceholder onlyOne />
                )}
            </Container>
        </Block>
    );
}