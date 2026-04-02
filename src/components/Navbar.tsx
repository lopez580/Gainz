'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()

    const links = [
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/entrenamiento', label: 'Entrenamiento' },
        { href: '/nutricion', label: 'Nutricion' },
    ]
    return (

        <nav>
            <span>Gainz</span>
            <div>
                {links.map(link => (
                    <Link href={link.href} className={pathname === link.href ? 'nav__link--active' : 'nav__link'}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>


    )
}