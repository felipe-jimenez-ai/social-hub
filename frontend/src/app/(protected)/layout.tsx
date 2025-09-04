import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Navigation />
      </header>
      <main className="max-w-7xl mx-auto pt-16 py-6 sm:px-6 lg:px-8 flex-1">
        <div className="px-4 py-6 sm:px-0">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
