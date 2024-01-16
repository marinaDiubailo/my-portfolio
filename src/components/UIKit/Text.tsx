import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { font } from '../../styles/Common';

export const Text = styled.span`
    ${font({
        color: theme.colors.secondary,
        lineHeight: 1.8,
        Fmin: 16,
        Fmax: 20,
    })}
`;
