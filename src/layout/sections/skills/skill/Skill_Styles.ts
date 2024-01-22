import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/UIKit/FlexWrapper';
import { theme } from '../../../../styles/Theme';

const SkillWrapper = styled(FlexWrapper)`
    min-height: 130px;
    padding: 5px;
    background-color: ${theme.bg.bgSecondary};
    border-radius: 15px;
    box-shadow: 1px 1px 10px 5px rgba(255, 255, 255, 0.4);
`;

const SkillTitle = styled.h4`
    color: ${theme.colors.secondary};
    font-size: 16px;
    text-align: center;
`;

const SkillCategoryWrapper = styled(FlexWrapper)`
    margin-bottom: 30px;
`;

export const S = {
    SkillWrapper,
    SkillTitle,
    SkillCategoryWrapper,
};
