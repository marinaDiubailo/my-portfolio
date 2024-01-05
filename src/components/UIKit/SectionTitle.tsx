import styled, { css } from 'styled-components';

type SectionTitleProps = {
    underline?: boolean;
};
export const SectionTitle = styled.h2<SectionTitleProps>`
    font-size: 40px;
    line-height: 180%;
    font-family: 'Playfair Display', serif;
    margin-bottom: 30px;
    text-align: center;
    position: relative;
    display: inline-block;

    ${(props) =>
        props.underline &&
        css<SectionTitleProps>`
            &::after {
                content: '';
                width: 70%;
                height: 2px;
                position: absolute;
                background: #676cdb;
                opacity: 0.5;
                left: 15%;
                bottom: -8px;
            }
        `}
`;
