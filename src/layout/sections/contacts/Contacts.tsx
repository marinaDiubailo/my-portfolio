import { memo } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Button } from '../../../components/UIKit/Button';
import { Icon } from '../../../components/UIKit/Icon';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import serviceSprite from '../../../assets/icons/serviceSprite.svg';
import { Container } from '../../../components/UIKit/Container';
import { font } from '../../../styles/Common';

export const Contacts = memo(() => {
    return (
        <section id="contacts">
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <Form>
                    <Field type="text" />
                    <Field type="email" placeholder="Your email" />
                    <Field
                        as="textarea"
                        placeholder="Tell me about your project"
                    ></Field>
                    <Button
                        variant="primary"
                        type="submit"
                        aria-label="Отправить"
                    >
                        Send{' '}
                        <Icon
                            sprite={serviceSprite}
                            id="arrow"
                            width="20px"
                            height="20px"
                            viewBox="0 0 22 20"
                            fill="none"
                            stroke="white"
                        />
                    </Button>
                </Form>
            </Container>
        </section>
    );
});

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    textarea {
        resize: none;
        height: 155px;
    }
`;

const Field = styled.input.attrs(({ placeholder }) => ({
    placeholder: placeholder || 'What’s your name?',
}))`
    padding: 7px 15px;
    width: 100%;
    border: 1px solid ${theme.colors.secondary};
    ${font({
        family: 'inherit',
        color: theme.colors.primary,
        Fmin: 16,
        Fmax: 20,
    })}
    background-color: ${theme.bg.bgSecondary};

    &::placeholder {
        ${font({
            family: 'inherit',
            color: theme.colors.secondary,
            Fmin: 14,
            Fmax: 18,
        })}
        letter-spacing: 0.06em;
    }

    &:focus {
        outline: 1px solid ${theme.colors.accent};
    }
`;
