import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Header = styled.header`
    position: fixed;
    width: 100%;
    padding: 20px 0;
    z-index: 10;
    //background-color: ${theme.bg.bgPrimary};
    backdrop-filter: blur(15px);
`;

export const S = {
    Header,
};
