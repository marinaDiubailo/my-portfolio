import { memo, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '../../../components/UIKit/Button';
import { Icon } from '../../../components/UIKit/Icon';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import serviceSprite from '../../../assets/icons/serviceSprite.svg';
import { Container } from '../../../components/UIKit/Container';
import { S } from './Contacts_Styles';

export const Contacts = memo(() => {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                'service_v0ulpeo',
                'template_s94dn0c',
                form.current,
                'S_rx8JhNTlothWK66',
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
        form.current.reset();
    };

    return (
        <section id="contacts">
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field
                        type="text"
                        placeholder="What's your name?"
                        name="user_name"
                        required
                    />
                    <S.Field
                        type="email"
                        placeholder="Your email"
                        name="user_email"
                        required
                    />
                    <S.Field
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        required
                    />
                    <S.Field
                        as="textarea"
                        name="message"
                        placeholder="Message"
                        required
                    ></S.Field>
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
                </S.Form>
            </Container>
        </section>
    );
});
