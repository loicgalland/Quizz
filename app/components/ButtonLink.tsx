import Link from "next/link";

interface ButtonLinkProps {
    link: string;
    text: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ link, text }) => {
    return(
        <Link href={link} className="bg-purple-950 text-white py-1 px-3 rounded-full w-64 hover:bg-purple-800 text-center">{text}</Link>
    )
}

export default ButtonLink;