'use client'
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

const links = [
  { href: '/dashboard',     label: 'Dashboard',     icon: 'dashboard'     },
  { href: '/entrenamiento', label: 'Entrenamiento',  icon: 'fitness_center' },
  { href: '/nutricion',     label: 'Nutrición',      icon: 'restaurant'    },
  

]

export default function Navbar() {
  const pathname = usePathname()
  const router =useRouter()

  return (
    <>
      {/* Top Nav */}
      <header className="bg-surface w-full border-b border-white/10 sticky top-0 z-50">
        <nav className="flex justify-between items-center px-6 h-16 w-full mx-auto">
          <div className="flex items-center gap-8">
            <span  onClick={() => router.push('/dashboard')} className="text-2xl font-black tracking-tighter text-primary italic font-headline">
              GAINZ
            </span>
            <div className="flex gap-6">
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    pathname === link.href
                      ? 'text-primary border-b-2 border-primary pb-1 font-headline text-sm tracking-tight'
                      : 'text-on-surface-variant hover:text-on-surface transition-colors font-headline text-sm tracking-tight'
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-white/5 p-2 rounded-full transition-all">
              notifications
            </button>
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-white/5 p-2 rounded-full transition-all">
              settings
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center text-primary text-sm font-bold font-headline">
              G
            </div>
            <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center text-primary text-sm font-bold font-headline" onClick={async () => {
              await signOut({redirect: false});
              router.push('/login');
            }}>
              out
            </div>
          </div>
        </nav>
      </header>

    </>
  )
}