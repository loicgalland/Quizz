import Link from "next/link";

export default function Cta({ link, text }){
    return(
        <div>
            <Link href={link} className="bg-purple-950 text-white py-1 px-3 rounded-full hover:bg-purple-800">{text}</Link>
        </div>

    )
}