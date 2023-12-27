import Navbar from "@/app/components/Navbar";

export default function QuizzLayout({ children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="px-5 py-3 text-purple-950">
        <Navbar />
        {children}
        </body>
        </html>
    )
}
