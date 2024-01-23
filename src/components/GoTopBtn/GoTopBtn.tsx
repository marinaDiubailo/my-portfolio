import { memo, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';
import { Icon } from '../UIKit/Icon';
import serviceSprite from '../../assets/icons/serviceSprite.svg';
import { theme } from '../../styles/Theme';

export const GoTopBtn = memo(() => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const showScrollButton = () => {
            if (window.scrollY > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener('scroll', showScrollButton);

        return () => {
            window.removeEventListener('scroll', showScrollButton);
        };
    }, []);

    const scrollToTopHandler = useCallback(() => {
        animateScroll.scrollToTop({ duration: 500, smooth: true });
    }, []);

    return (
        <>
            {show && (
                <GoTop onClick={scrollToTopHandler}>
                    <Icon
                        sprite={serviceSprite}
                        id="goTop"
                        width="50"
                        height="50"
                        viewBox="0 0 30 30"
                    />
                </GoTop>
            )}
        </>
    );
});

const GoTop = styled.button`
    background-color: ${theme.colors.accent};
    opacity: 0.6;
    color: ${theme.colors.primary};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    right: 30px;
    bottom: 30px;
    // box-shadow: 2px 2px 10px 0px rgb(255, 255, 255);
    box-shadow: 0px 5px 35px rgba(255, 255, 255, 0.4);
    transition: ${theme.animations.transition};

    &:hover {
        transform: scale(1.2);
    }
`;
