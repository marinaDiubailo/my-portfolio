import { memo } from 'react';
import { SOCIAL_LINKS as socialLinks } from '../../data/links';
import { Container } from '../../components/UIKit/Container';
import { FlexWrapper } from '../../components/UIKit/FlexWrapper';
import { Icon } from '../../components/UIKit/Icon';
import socialSprite from '../../assets/icons/socialSprite.svg';
import { S } from './Footer_Styles';

export const Footer = memo(() => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction="column" align="center">
                    <S.FooterTitle>Let's be Friends</S.FooterTitle>
                    <S.SocialList>
                        {socialLinks.map((link) => (
                            <li key={link.iconId}>
                                <S.SocialLink
                                    href={link.href}
                                    target="_blank"
                                    aria-label={link.ariaLabel}
                                >
                                    <Icon
                                        sprite={socialSprite}
                                        id={link.iconId}
                                        width="50px"
                                        height="50px"
                                        viewBox={link.viewBox}
                                    />
                                </S.SocialLink>
                            </li>
                        ))}
                    </S.SocialList>
                    <S.Copyright>
                        © 2024 Made by Marina Diubailo | All rights reserved
                    </S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
});
