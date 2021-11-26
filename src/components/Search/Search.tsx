import { Block } from "../../components/Block/Block";
import { Container } from "../../components/Container/Container";
import * as Styled from "./Search.styles";
import { useState } from "react";
import { CountriesInput } from "../CountriesInput/CountriesInput";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const Search = () => {
    const [addsCount, setAddCount] = useState<number>(0);
    return (
        <Block>
            <Container> 
                <Styled.SearchBlock>
                    <Input placeholder={`${addsCount} объявлений рядом`} maxWidth={752} mobilePaddingLeft={0}>
                        {window.screen.width > 767 && (
                            <Styled.SearchSVG />
                        )}
                    </Input> 
                    <CountriesInput noneOnMobile />
                    <Button blackButton>
                        <span>Поиск</span>
                        <Styled.SearchSVG style={{ marginLeft: "60px" }} />
                    </Button>
                </Styled.SearchBlock>
                {window.screen.width < 767 && (
                    <CountriesInput opacityPlaceholder onlyOne />
                )}
            </Container>
        </Block>
    );
}