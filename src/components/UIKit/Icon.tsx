import { memo, ReactNode } from 'react';
import styled from 'styled-components';

type IconPropsType = {
    id: string;
    sprite: ReactNode;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string;
    stroke?: string;
};

export const Icon = memo((props: IconPropsType) => {
    const {
        id,
        width = '80',
        height = '80',
        viewBox = '0 0 80 80',
        fill = '#333',
        sprite,
        stroke,
    } = props;

    return (
        <Svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill}
            stroke={stroke}
            xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={`${sprite}#${id}`} />
        </Svg>
    );
});

type SvgPropType = {};

const Svg = styled.svg<SvgPropType>``;
