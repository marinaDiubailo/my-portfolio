import { memo } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/UIKit/Icon';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { Button } from '../../../components/UIKit/Button';
import { Text } from '../../../components/UIKit/Text';
import serviceSprite from '../../../assets/icons/serviceSprite.svg';
import photo from '../../../assets/images/photo1.jpg';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import { Section } from '../../../components/UIKit/Section';
import { Container } from '../../../components/UIKit/Container';

export const Main = memo(() => {
    return (
        <Section mt={'120px'} id="main">
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <FlexWrapper direction="column" width="50%">
                        <SectionTitle as="span">Hello!</SectionTitle>
                        <Title>I'm Marina Diubailo</Title>
                        <Introduction>
                            <Text>I'm a </Text>
                            <MainTitle>Web Developer</MainTitle>
                            <Text>
                                {''} who loves to craft attractive design
                                experiences for the web.
                            </Text>
                        </Introduction>
                        <FlexWrapper>
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
                    </FlexWrapper>
                    <img
                        src={photo}
                        alt="myPhoto"
                        style={{
                            width: '400px',
                            borderRadius: '50%',
                            border: '3px solid white',
                        }}
                    />
                </FlexWrapper>
            </Container>
        </Section>
    );
});

const MainTitle = styled.h1`
    display: inline-block;
    font-size: 20px;
`;

const Title = styled.h2`
    font-size: 70px;
    line-height: 120%;
    font-family: 'Playfair Display', serif;
    white-space: no-wrap;
    margin-bottom: 10px;
`;

const Introduction = styled.div`
    width: 400px;
    margin-bottom: 30px;
`;
