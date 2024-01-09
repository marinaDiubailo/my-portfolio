type LinkType = {
    id: string;
    name: string;
    href: string;
};

export const WORKS_LINKS: LinkType[] = [
    {
        id: 'all',
        name: 'all',
        href: '_blank',
    },
    {
        id: 'react',
        name: 'react',
        href: '_blank',
    },
    {
        id: 'next',
        name: 'next',
        href: '_blank',
    },
    {
        id: 'spa',
        name: 'spa',
        href: '_blank',
    },
];

export const NAVIGATION_LINKS: LinkType[] = [
    {
        id: 'home',
        name: 'Home',
        href: '#main',
    },
    {
        id: 'skills',
        name: 'Skills',
        href: '#skills',
    },
    {
        id: 'works',
        name: 'Works',
        href: '#works',
    },
];
