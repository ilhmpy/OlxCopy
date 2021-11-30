import { Block } from "../../../../components/Block/Block";
import { Container } from "../../../../components/Container/Container";
import * as Style from "./CompanyPrompt.styles";
import { H3 } from "../../../../components/UI/H3";
import { Button } from "../../../../components/Button/Button";
import { MediaBlock } from "../../../../components/MediaBlock/MediaBlock";

export const CompanyPrompt = () => {
    return (
        <Block height={130} background="#002f34" center paddingsMobile withoutMarginBottom> 
            <Container>
                <Style.Graphic />
                <Style.TextContainer> 
                    <H3 silver>Выделяйтесь как компания!</H3>
                    <MediaBlock showDesctop={true} showMobile={false}> 
                        <H3 white>Посмотрите предложение OLX для бизнеса</H3>
                    </MediaBlock>
                    <MediaBlock showDesctop={false} showMobile={false} showTablet={true}>
                        <H3 white>Посмотрите предложение OLX для бизнеса</H3>
                    </MediaBlock>
                    <MediaBlock showDesctop={false} showMobile={true}>
                        <Button little>
                            <span>Подробнее</span>
                        </Button>
                    </MediaBlock>
                </Style.TextContainer>
                <MediaBlock showDesctop={true} showMobile={false}>
                    <Button little>
                        <span>Подробнее</span>
                    </Button>
                </MediaBlock>
            </Container>
        </Block>
    );
};