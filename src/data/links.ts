type SocialLinkType = {
    href: string;
    ariaLabel: string;
    iconId: string;
    viewBox: string;
};

export enum Tabs {
    All = 'all',
    React = 'react',
    Next = 'next',
    SPA = 'spa',
}

export type ProjectTabType = Tabs.React | Tabs.Next | Tabs.SPA;

export const TABS = [Tabs.All, Tabs.React, Tabs.Next, Tabs.SPA];

export const NAVIGATION_LINKS = ['Home', 'Skills', 'Portfolio', 'Contacts'];

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
