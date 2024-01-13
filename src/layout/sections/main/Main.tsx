import { memo } from 'react';
import styled from 'styled-components';
// import { theme } from '../../../styles/Theme';
import { Icon } from '../../../components/UIKit/Icon';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { Button } from '../../../components/UIKit/Button';
import { Text } from '../../../components/UIKit/Text';
import serviceSprite from '../../../assets/icons/serviceSprite.svg';
import photo from '../../../assets/images/photo3.png';
import { Container } from '../../../components/UIKit/Container';
import bgPhoto from '../../../assets/icons/bgPhoto.svg';
import { theme } from '../../../styles/Theme';

export const Main = memo(() => {
    return (
        <StyledSection id="main">
            <Container>
                <FlexWrapper justify="space-between" align="center" fullHeight>
                    <div style={{ flex: '50%' }}>
                        <Greeting>Hello!</Greeting>
                        <Name>I'm Marina Diubailo</Name>
                        <Introduction>
                            <Text>I’m a self-taught </Text>
                            <MainTitle>front-end developer</MainTitle>
                            <Text>
                                {''} based in Mogilev, Belarus. I love to craft
                                attractive design experiences for the web.
                            </Text>
                        </Introduction>
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
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 3rem;
`;

const Name = styled.h2`
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 10px;
`;

const MainTitle = styled.h1`
    display: inline-block;
`;

const Introduction = styled.div`
    margin-bottom: 30px;
    max-width: 70%;
`;

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const PhotoWrapper = styled.div`
    width: 400px;
    height: 500px;
    position: relative;
    z-index: 0;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url(${bgPhoto}) center / cover no-repeat;
        // filter: blur(75px);
        z-index: -1;
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        left: 50px;
        top: -40px;
        bottom: -40px;
        border: 25px solid ${theme.colors.accent};
        z-index: -2;
    }
`;
