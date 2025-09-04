'use client'

import { useAuth } from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Image from 'next/image' // Import the Image component

export default function Home() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push('/members')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (user) {
    return null // Will redirect to /members
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center">
            <div className="flex justify-center mb-0"> {/* Added a div for centering the image */}
              <Image
                src="/logo.png"
                alt="Achievers Hub Logo"
                width={200}
                height={200}
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-0">Achievers Hub</h1>
            <p className="text-2xl font-light text-gray-900 mb-4">powered by AZ Tech</p>
            <p className="text-xl text-gray-600 mb-8">Find the right person in the room, instantly.</p>
            <p className="text-gray-600 mb-8">
              Build meaningful professional connections within your community.
            </p>
            <div className="space-y-4">
              <Link
                href="/auth/login"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Already have an account? Sign In
              </Link>
              <Link
                href="/access"
                className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Enter Access Code
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
