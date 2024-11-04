import Link from "next/link"

import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/ThatEmeraldG" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/darwin-donovan-darmadi/" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/darwin_teg/?hl=en" },
    { icon: <FaXTwitter />, path: "https://x.com/ThatEmeraldG" },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        ))}
    </div>
  )
}

export default Socials