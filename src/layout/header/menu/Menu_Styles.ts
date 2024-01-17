import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.primary};

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

    a {
        color: transparent;
    }

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
    }

    &:hover {
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
    background-color: #27303de4;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: none;

    ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
            display: flex;
            justify-content: center;
            align-items: center;
        `}

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`;

const Navigation = styled.nav`
    ul {
        display: flex;
        padding: 10px;
        gap: 40px;
    }
`;

export const S = {
    Mask,
    MenuItem,
    BurgerButton,
    MobileMenuPopup,
    Navigation,
};
