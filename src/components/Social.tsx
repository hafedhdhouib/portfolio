import React from 'react'
import Link from 'next/link'

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const socials = [
    { icon: <FaGithub />, path: '' },
    { icon: <FaLinkedinIn />, path: '' }
]
interface SocialProps {
    containerStyles?: string;
    iconStyle?: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyle }) => {
    return (
        <div className={containerStyles}>{socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyle}>{item.icon}</Link>
            )
        })}
        </div>
    )
}

export default Social