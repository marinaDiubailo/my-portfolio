import { memo } from 'react';
import styled from 'styled-components';
import { Button } from '../../../components/UIKit/Button';
import { FlexWrapper } from '../../../components/UIKit/FlexWrapper';
import { Icon } from '../../../components/UIKit/Icon';
import { Section } from '../../../components/UIKit/Section';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import serviceSprite from '../../../assets/icons/serviceSprite.svg';
import socialSprite from '../../../assets/icons/socialSprite.svg';
import { Text } from '../../../components/UIKit/Text';

export const Contact = memo(() => {
    return (
        <Section bg="black">
            <FlexWrapper
                direction="column"
                width="1196px"
                margin="0 auto"
                align="center"
            >
                <SectionTitle underline>Contact me</SectionTitle>
                <FlexWrapper gap="20px">
                    <FlexWrapper width="45%" gap="10px">
                        <span
                            style={{
                                fontSize: '70px',
                                lineHeight: '120%',
                                fontWeight: 700,
                            }}
                        >
                            Let's be Friends
                        </span>
                        <FlexWrapper as="ul" gap="15px" align="center">
                            <li>
                                <IconLink href="_blank">
                                    <Icon
                                        sprite={socialSprite}
                                        id="github"
                                        width="30px"
                                        height="30px"
                                        viewBox="0 0 28 28"
                                        fill="white"
                                    />
                                </IconLink>
                            </li>
                            <li>
                                <IconLink href="_blank">
                                    <Icon
                                        sprite={socialSprite}
                                        id="linkedin"
                                        width="30px"
                                        height="30px"
                                        viewBox="0 0 26 26"
                                        fill="white"
                                    />
                                </IconLink>
                            </li>
                            <li>
                                <IconLink href="_blank">
                                    <Icon
                                        sprite={socialSprite}
                                        id="telegram"
                                        width="30px"
                                        height="30px"
                                        viewBox="0 0 20 20"
                                        fill="white"
                                    />
                                </IconLink>
                            </li>
                        </FlexWrapper>
                        <FlexWrapper gap="10px" align="center">
                            <Icon
                                sprite={serviceSprite}
                                id="tel"
                                width="20px"
                                height="20px"
                                viewBox="0 0 26 26"
                            />
                            <Text>+ 375 29-740-89-05</Text>
                        </FlexWrapper>
                        <FlexWrapper gap="10px" align="center">
                            <Icon
                                sprite={serviceSprite}
                                id="mail"
                                width="20px"
                                height="20px"
                                viewBox="0 0 20 20"
                            />
                            <Text>marinadiubailo@gmail.com</Text>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper width="45%" direction="column">
                        <FlexWrapper
                            as="form"
                            direction="column"
                            justify="center"
                            align="center"
                            gap="20px"
                            width="500px"
                        >
                            <Field type="text" />
                            <Field type="email" placeholder="Your email" />
                            <Field
                                as="textarea"
                                placeholder="Tell me about your project"
                            ></Field>
                        </FlexWrapper>
                        <Button variant="primary" type="submit">
                            Send{' '}
                            <Icon
                                sprite={serviceSprite}
                                id="arrow"
                                width="20px"
                                height="20px"
                                viewBox="0 0 22 20"
                                fill="none"
                                onHov="none"
                            />
                        </Button>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </Section>
    );
});

const Field = styled.input.attrs(({ placeholder }) => ({
    placeholder: placeholder || 'What’s your name?',
}))`
    padding: 5px 15px;
    margin: 10px 0;
    width: 100%;
    border-bottom: 1px solid white;
    background: transparent;
    color: inherit;

    &::placeholder {
        color: white;
        opacity: 0.5;
    }
`;

const IconLink = styled.a`
    display: block;

    &:hover {
        transform: scale(1.15);
    }
`;
