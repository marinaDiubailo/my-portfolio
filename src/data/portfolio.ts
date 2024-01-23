import Closing from '../assets/images/closing.jpg';
import Blog from '../assets/images/blog.jpg';
import OwlTop from '../assets/images/OwlTop.jpg';
import Clock from '../assets/images/25+5Clock.webp';
import { ProjectTabType, Tabs } from './links';

type ProjectType = {
    id: number;
    src: string;
    title: string;
    type: ProjectTabType;
    description: string;
};

export const portfolio: ProjectType[] = [
    {
        id: 0,
        src: Blog,
        title: 'Articles Blog',
        type: Tabs.SPA,
        description:
            'React SPA, adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    },
    {
        id: 1,
        src: Clock,
        title: '25+5 Clock',
        type: Tabs.React,
        description: 'Simple React application',
    },
    {
        id: 2,
        src: OwlTop,
        title: 'OwlTop Courses',
        type: Tabs.Next,
        description:
            'adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    },
    {
        id: 3,
        src: Closing,
        title: 'Crown Closing',
        type: Tabs.SPA,
        description:
            'React SPA E-Commerse,adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    },
];
