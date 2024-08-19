import { contactOption } from '@/app/utils/constants/contactOption';
import React from 'react';

export const ContactOption = () => {
    return (
        <div className='w-full flex flex-col gap-4 border-t border-b border-solid border-white py-4'>
            {
                contactOption.map(({id, icon, label, info}) => (
                    <div key={id} className='flex items-center gap-4'>
                        {icon}
                        <div className='flex flex-col'>
                            <h3 className='uppercase'>{label}</h3>
                            <p>{info}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
