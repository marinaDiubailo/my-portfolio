import { memo, ReactNode } from 'react';
import ReactSlider from 'react-slick';
import { Dot, Dots, ReactSliderWrapper } from './Slider_Styles';

type SliderPropsType = {
    children: ReactNode;
};

export const Slider = memo((props: SliderPropsType) => {
    const { children } = props;

    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        initialSlide: 0,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        swipeToSlide: false,

        appendDots: (dots: Iterable<ReactNode>) => (
            <div>
                <Dots> {dots} </Dots>
            </div>
        ),
        customPaging: (dot: ReactNode) => <Dot>{dot}</Dot>,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <ReactSliderWrapper>
            <ReactSlider {...settings}>{children}</ReactSlider>
        </ReactSliderWrapper>
    );
});
