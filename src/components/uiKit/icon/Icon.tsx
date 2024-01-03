import { memo, ReactNode } from 'react';

type IconPropsType = {
    id: string;
    sprite: ReactNode;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string;
};

export const Icon = memo((props: IconPropsType) => {
    const {
        id,
        width = '50',
        height = '50',
        viewBox = '0 0 50 50',
        fill = '#7572D5',
        sprite,
    } = props;

    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={`${sprite}#${id}`} />
        </svg>
    );
});
