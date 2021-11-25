import { Block } from "../../components/Block/Block";
import { Container } from "../../components/Container/Container";
import * as Styled from "./Search.styles";
import { useState } from "react";

export const Search = () => {
    const [addsCount, setAddCount] = useState<number>(0);
    return (
        <Block>
            <Container>
                <Styled.SearchBlock>
                    <Styled.SearchInput placeholder={`${addsCount} объявлений рядом`} />
                </Styled.SearchBlock>
            </Container>
        </Block>
    );
}