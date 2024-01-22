import { memo } from 'react';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

import { Icon } from '../../../components/UIKit/Icon';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { Button } from '../../../components/UIKit/Button';
import serviceSprite from '../../../assets/icons/serviceSprite.svg';
import photo from '../../../assets/images/photo1.jpg';
import { Container } from '../../../components/UIKit/Container';
import { S } from './Main_Styles';

export const Main = memo(() => {
    return (
        <S.StyledSection id="home">
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
                            <S.Text>
                                I’m a front-end developer based in Mogilev,
                                Belarus.
                            </S.Text>
                            <S.MainTitle>
                                <p>A Front-end Developer.</p>
                                <Typewriter
                                    options={{
                                        strings: ['A Front-end Developer.'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 100,
                                    }}
                                />
                            </S.MainTitle>
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
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="Marina Diubailo" />
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.StyledSection>
    );
});
