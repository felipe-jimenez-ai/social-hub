import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex-1">
        <div className="px-4 py-6 sm:px-0">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
