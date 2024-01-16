import { SkillPropsType } from '../components/skill/Skill';

export type CategoryType =
    | 'programming languages'
    | 'libraries & frameworks'
    | 'tools & platforms';

type SkillsType = {
    [key in CategoryType]: SkillPropsType[];
};

export const SKILLS: SkillsType = {
    'programming languages': [
        {
            id: 'javascript',
            title: 'JavaScript',
            viewBox: '0 0 120 120',
        },
        {
            id: 'typescript',
            title: 'TypeScript',
            viewBox: '-4 -4 130 130',
        },
        {
            id: 'html',
            title: 'Html5',
            viewBox: '0 0 120 120',
        },
        {
            id: 'css',
            title: 'Css3',
            viewBox: '0 0 118 118',
        },
        {
            id: 'sass',
            title: 'Sass',
            viewBox: '0 -5 95 100',
        },
    ],
    'libraries & frameworks': [
        {
            id: 'react',
            title: 'React',
            viewBox: '0 -10 115 115',
        },
        {
            id: 'next',
            title: 'Next.js',
            viewBox: '-10 -10 280 280',
        },
        {
            id: 'redux',
            title: 'Redux',
            viewBox: '-3 -3 110 110',
        },
        {
            id: 'styledComponents',
            title: 'Styled Components',
            viewBox: '0 0 120 120',
        },
    ],
    'tools & platforms': [
        {
            id: 'git',
            title: 'Git',
            viewBox: '0 -3 115 115',
        },
        {
            id: 'github',
            title: 'GitHub',
            viewBox: '-5 -5 100 100',
        },
        {
            id: 'vscode',
            title: 'VSCode',
            viewBox: '0 -3 115 115',
        },
        {
            id: 'storybook',
            title: 'Storybook',
            viewBox: '-31.5 0 319 319',
        },
    ],
};
