import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    textarea {
        resize: none;
        height: 155px;
    }
`;

const Field = styled.input`
    padding: 7px 15px;
    width: 100%;
    border: 1px solid ${theme.colors.secondary};
    border-radius: 5px;
    ${font({
        family: 'inherit',
        color: theme.colors.primary,
        Fmin: 16,
        Fmax: 20,
    })}
    background-color: ${theme.bg.bgSecondary};

    &::placeholder {
        ${font({
            family: 'inherit',
            color: theme.colors.secondary,
            Fmin: 14,
            Fmax: 18,
        })}
        letter-spacing: 0.1em;
    }

    &:focus {
        outline: 1px solid ${theme.colors.accent};
    }
`;

export const S = {
    Form,
    Field,
};
