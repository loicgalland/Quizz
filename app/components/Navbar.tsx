import Link from 'next/link';

export default function Navbar(){
    return (
        <div>
            <nav className="flex gap-2">
                <Link href="/" className="text-2xl">←</Link>
            </nav>
        </div>
    )
}