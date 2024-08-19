import { contactMedia } from "@/app/utils/constants/contactMedia";

export const ContactMedia = () => {
    return (
        <ul className="w-full flex justify-around">
            {contactMedia.map(({ id, icon, link }) => (
                <li key={id} className="border-2 border-solid border-white p-2 rounded-full hover:border-slate-500 hover:text-slate-500">
                    <a href={link} target="_blank">{icon}</a>
                </li>
            ))}
        </ul>
    );
};
