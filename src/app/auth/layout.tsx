import Footer from '@/components/Footer'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">The Hub</h1>
              <p className="text-gray-600 mt-2">Find the right person in the room, instantly.</p>
            </div>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
