interface INavLink {
    id: number;
    label: string;
    link: string;
}

export const navLinks: INavLink[] = [
    {
        id: 1,
        label: "about",
        link: "/about",
    },
    {
        id: 2,
        label: "experience",
        link: "/experience",
    },
    {
        id: 3,
        label: "projects",
        link: "/projects",
    },
    {
        id: 4,
        label: "skills",
        link: "/skills",
    },
    {
        id: 5,
        label: "contact me",
        link: "/contact",
    },
];
