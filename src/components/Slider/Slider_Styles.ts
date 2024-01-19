import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Dots = styled.ul`
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    justify-content: center;

    li + li {
        margin-left: 10px;
    }

    li.slick-active button {
        background-color: ${theme.colors.accentHover};
        width: 30px;
        border-radius: 30px;
    }
`;

export const Dot = styled.button`
    width: 15px;
    height: 15px;
    color: transparent;
    border: 2px solid ${theme.colors.accent};
    border-radius: 50%;
    cursor: pointer;
    font-size: 0;
    transition: 0.2s;

    &:hover {
        background-color: ${theme.colors.accentHover};
    }
`;

export const ReactSliderWrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    transition: 0.2s;

    @media ${theme.media.tablet} {
        width: 100%;
    }

    .slick-slider {
        position: relative;
        display: block;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
    }

    .slick-list {
        position: relative;
        display: block;
        overflow: hidden;
    }
    .slick-list:focus {
        outline: none;
    }
    .slick-list.dragging {
        cursor: pointer;
        cursor: hand;
    }

    .slick-slider .slick-track,
    .slick-slider .slick-list {
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    .slick-track {
        position: relative;
        top: 0;
        left: 0;

        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .slick-track:before,
    .slick-track:after {
        display: table;

        content: '';
    }
    .slick-track:after {
        clear: both;
    }
    .slick-loading .slick-track {
        visibility: hidden;
    }

    .slick-slide {
        display: none;
        float: left;
        height: 100%;
        min-height: 1px;
    }
    [dir='rtl'] .slick-slide {
        float: right;
    }
    .slick-initialized .slick-slide {
        display: block;
    }
    .slick-arrow.slick-hidden {
        display: none;
    }

    /* Arrows */
    .slick-prev,
    .slick-next {
        font-size: 0;
        line-height: 0;
        position: absolute;
        top: 50%;
        display: block;
        width: 30px;
        height: 30px;
        -webkit-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        transform: translate(0, -50%);
        cursor: pointer;
        color: transparent;
        border: none;
        outline: none;
    }
    .slick-prev:hover,
    .slick-prev:focus,
    .slick-next:hover,
    .slick-next:focus {
        opacity: 0.6;
        outline: none;
    }
    .slick-prev:hover:before,
    .slick-prev:focus:before,
    .slick-next:hover:before,
    .slick-next:focus:before {
        opacity: 1;
    }
    .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before {
        opacity: 0.4;
    }

    .slick-prev:before,
    .slick-next:before {
        font-size: 60px;
        line-height: 0.75;
        color: ${theme.colors.accent};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .slick-prev {
        left: -30px;
    }
    [dir='rtl'] .slick-prev {
        right: -30px;
        left: auto;
    }
    .slick-prev:before {
        content: '<';
    }
    [dir='rtl'] .slick-prev:before {
        content: '>';
    }

    .slick-next {
        right: -30px;
    }
    [dir='rtl'] .slick-next {
        right: auto;
        left: -30px;
    }
    .slick-next:before {
        content: '>';
    }
    [dir='rtl'] .slick-next:before {
        content: '<';
    }
`;
