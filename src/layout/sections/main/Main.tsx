import { memo } from 'react';
import styled from 'styled-components';
// import { theme } from '../../../styles/Theme';
import { Icon } from '../../../components/UIKit/Icon';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { Button } from '../../../components/UIKit/Button';
import { Text } from '../../../components/UIKit/Text';
import serviceSprite from '../../../assets/icons/serviceSprite.svg';
import photo from '../../../assets/images/photo1.jpg';
import { Container } from '../../../components/UIKit/Container';
// import bgPhoto from '../../../assets/icons/bgPhoto.svg';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Main = memo(() => {
    return (
        <StyledSection id="main">
            <Container>
                <FlexWrapper
                    align="center"
                    fullHeight
                    justify="space-around"
                    wrap="wrap"
                >
                    <div style={{ marginBottom: '60px' }}>
                        <Greeting>Hello!</Greeting>
                        <Name>
                            I'm <span>Marina Diubailo</span>
                        </Name>
                        <Introduction>
                            <Text>I’m a self-taught </Text>
                            <MainTitle>front-end developer</MainTitle>
                            <Text>{''} based in Mogilev, Belarus.</Text>
                        </Introduction>
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
                    <PhotoWrapper>
                        <Photo src={photo} alt="Marina Diubailo" />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
});

const StyledSection = styled.section`
    min-height: 100vh;
`;

const Greeting = styled.span`
    ${font({
        family: "'Playfair Display', serif",
        weight: 700,
        Fmin: 26,
        Fmax: 36,
    })}
`;

const Name = styled.h2`
    ${font({
        family: "'Playfair Display', serif",
        weight: 700,
        Fmin: 36,
        Fmax: 60,
    })}

    span {
        white-space: nowrap;
        position: relative;
        z-index: 0;

        &:before {
            content: '';
            width: 100%;
            display: inline-block;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
            opacity: 0.8;
        }
    }
`;

const MainTitle = styled.h1`
    ${font({
        Fmin: 16,
        Fmax: 20,
    })}
    display: inline-block;
`;

const Introduction = styled.div`
    margin: 10px 0 30px;

    @media ${theme.media.mobile} {
        margin: 20px 0 35px;
    }
`;

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`;

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::after {
        content: '';
        position: absolute;
        width: 360px;
        height: 470px;
        left: 20px;
        top: -20px;
        border: 7px solid ${theme.colors.accent};
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 315px;
            height: 415px;
            left: 15px;
            top: -15px;
        }
    }
`;
