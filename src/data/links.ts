export type LinkType = {
    id: string;
    name: string;
    href: string;
};

type SocialLinkType = {
    href: string;
    ariaLabel: string;
    iconId: string;
    viewBox: string;
};

export const PROJECTS_LINKS: LinkType[] = [
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
        id: 'portfolio',
        name: 'Portfolio',
        href: '#portfolio',
    },
    {
        id: 'contacts',
        name: 'Contacts',
        href: '#contacts',
    },
];

export const SOCIAL_LINKS: SocialLinkType[] = [
    {
        href: 'https://github.com/marinaDiubailo',
        ariaLabel: 'Ссылка github',
        iconId: 'github',
        viewBox: '0 0 25 25',
    },
    {
        href: 'https://www.linkedin.com',
        ariaLabel: 'Ссылка linkedin',
        iconId: 'linkedin',
        viewBox: '0 0 24 24',
    },
    {
        href: 'https://t.me/marinadiubailo',
        ariaLabel: 'Ссылка telegram',
        iconId: 'telegram',
        viewBox: '2 0 19 19',
    },
];
