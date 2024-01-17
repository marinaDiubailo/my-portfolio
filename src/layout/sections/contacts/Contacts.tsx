import { memo } from 'react';
import { Button } from '../../../components/UIKit/Button';
import { Icon } from '../../../components/UIKit/Icon';
import { SectionTitle } from '../../../components/UIKit/SectionTitle';
import serviceSprite from '../../../assets/icons/serviceSprite.svg';
import { Container } from '../../../components/UIKit/Container';
import { S } from './Contacts_Styles';

export const Contacts = memo(() => {
    return (
        <section id="contacts">
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <S.Form>
                    <S.Field type="text" placeholder="What's your name?" />
                    <S.Field type="email" placeholder="Your email" />
                    <S.Field
                        as="textarea"
                        placeholder="Tell me about your project"
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
