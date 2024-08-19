import Image from "next/image";
import { Button } from "./ButtonToggleTheme";
import { ContactMedia } from "./ContactMedia";
import { ContactOption } from "./ContactOption";

export const LeftMenu = () => {
    return (
        <aside className="h-full flex flex-col justify-between items-center gap-4">
            <Image src="/perfil.png" width={150} height={150} alt="minha foto de perfil" className="rounded-xl" />
            <h1 className="text-2xl font-bold">Tiago Garbi</h1>
            <h2 className="bg-gray-700 text-center px-8 py-2 rounded-lg dark:text-white">Full stack Developer</h2>
            <Button />
            <ContactOption />
            <ContactMedia />
        </aside>
    );
};
