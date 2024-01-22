import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';
import { theme } from '../../../styles/Theme';

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.primary};
    transition: ${theme.animations.transition};

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`;

const MenuItem = styled.li`
    position: relative;
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
    z-index: 200;
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    transition: all 0.3s ease 0s;

    span {
        display: block;
        width: 36px;
        height: 2px;
        position: absolute;
        left: 40px;
        bottom: 50px;
        background-color: ${theme.colors.primary};

        ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
                background-color: transparent;
            `}

        &:before,
        &:after {
            content: '';
            height: 2px;
            position: absolute;
            display: block;
            background-color: ${theme.colors.primary};
        }

        &:before {
            width: 36px;
            transform: translateY(-10px);

            ${(props) =>
                props.isOpen &&
                css<{ isOpen: boolean }>`
                    transform: translateY(0) rotate(-45deg);
                `}
        }

        &:after {
            width: 24px;
            transform: translateY(10px);

            ${(props) =>
                props.isOpen &&
                css<{ isOpen: boolean }>`
                    width: 36px;
                    transform: translateY(0) rotate(45deg);
                `}
        }
    }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    //background-color: red;
    background-color: #27303de4;
    top: 0;
    left: 0;
    right: 0;
    //bottom: 0 !important;
    height: 100vh;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: all 0.6s ease-in-out;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        transition: all 0.6s ease-in-out;
    }

    ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
            transform: translateY(0);
            & ul {
                gap: 40px;
            }
        `}
`;

const Navigation = styled.nav`
    ul {
        display: flex;
        padding: 10px;
        gap: 40px;
    }
`;

const NavLink = styled(Link)`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: transparent;
    line-height: 1.4;

    &:before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.primary};
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
        transition: ${theme.animations.transition};
    }

    &:hover,
    &:active {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            color: ${theme.colors.accent};
            transform: skewX(12deg) translatex(4px);

            & + ${Mask} {
                transform: skewX(12deg) translatex(-4px);
            }
        }
    }

    @media ${theme.media.tablet} {
        font-size: 26px;
    }
`;

export const S = {
    Mask,
    NavLink,
    MenuItem,
    BurgerButton,
    MobileMenuPopup,
    Navigation,
};
