import * as Style from "./Favorites.styles";
import { Block } from "../../components/Block/Block";
import { Container } from "../../components/Container/Container";
import { H3 } from "../../components/UI/H3";
import { Button } from "../../components/Button/Button";

export const Favorites = () => {
    return (
        <Block 
            styles={`padding-top: 72px;`} background={"#fff"} 
            borderBottom={"1px solid #7f9799"}
        >   
            <Style.Header>
                <Container>
                    <H3 left>Избранные объявления</H3>
                    <Button maxWidth={"189px"} right height={38} fontSize={14} backgroundNone>
                        <span>Очистить избранные</span>
                    </Button>
                </Container>
            </Style.Header>
            <Style.Content>
                <Container>

                </Container>
            </Style.Content>
        </Block>
    );
};