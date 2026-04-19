import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}