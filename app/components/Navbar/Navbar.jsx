'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

function Navbar({ }) {
    const path = usePathname();
    console.log(path);

    return (
        <div className="flex justify-center gap-7 pt-6 text-xl">
            <Link href={'/'} className={`navLink ${path === '/' && 'text-blue-500' || 'text-gray-200'}`}>
                Grades table
            </Link>
            <Link href={'/add'} className={`navLink ${path === '/add' && 'text-blue-500' || 'text-gray-200'}`}>
                Add grade
            </Link>
        </div>
    )
}

export default Navbar