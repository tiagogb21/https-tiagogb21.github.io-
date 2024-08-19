import { navLinks } from "@/app/utils/constants/navLinks";

export const NavLinks = () => {
    return (
        <ul className="flex gap-4">
            {navLinks.map(({ id, label, link }) => (
                <li key={id} className="uppercase">
                    <a href={link}>{label}</a>
                </li>
            ))}
        </ul>
    );
};