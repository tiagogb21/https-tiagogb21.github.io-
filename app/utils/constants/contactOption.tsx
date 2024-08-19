import { ReactElement } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

interface contactOption {
    id: 1,
    icon: ReactElement,
    label: string,
    info: string,
}

export const contactOption = [
    {
        id: 1,
        icon: <MdEmail size={24} />,
        label: 'email',
        info: 'tiagogarbideveloper@gmail.com',
    },
    {
        id: 2,
        icon: <FaPhoneAlt size={24} />,
        label: 'phone',
        info: '(35) 9 9977-3556',
    },
];
