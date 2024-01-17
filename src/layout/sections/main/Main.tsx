import { memo } from 'react';
import { Icon } from '../../../components/UIKit/Icon';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { Button } from '../../../components/UIKit/Button';
import { Text } from '../../../components/UIKit/Text';
import serviceSprite from '../../../assets/icons/serviceSprite.svg';
import photo from '../../../assets/images/photo1.jpg';
import { Container } from '../../../components/UIKit/Container';
import { S } from './Main_Styles';

export const Main = memo(() => {
    return (
        <S.StyledSection id="main">
            <Container>
                <FlexWrapper
                    align="center"
                    fullHeight
                    justify="space-around"
                    wrap="wrap"
                >
                    <div style={{ marginBottom: '45px' }}>
                        <S.Greeting>Hello!</S.Greeting>
                        <S.Name>
                            I'm <span>Marina Diubailo</span>
                        </S.Name>
                        <S.Introduction>
                            <Text>I’m a self-taught </Text>
                            <S.MainTitle>front-end developer</S.MainTitle>
                            <Text>{''} based in Mogilev, Belarus.</Text>
                        </S.Introduction>
                        <FlexWrapper align="center" wrap="wrap">
                            <Button variant="primary">
                                <Icon
                                    sprite={serviceSprite}
                                    id="mail"
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 20 20"
                                    fill="white"
                                />
                                Email me
                            </Button>
                            <Button variant="secondary">
                                <Icon
                                    sprite={serviceSprite}
                                    id="download"
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="white"
                                />
                                Download CV
                            </Button>
                        </FlexWrapper>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="Marina Diubailo" />
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.StyledSection>
    );
});
