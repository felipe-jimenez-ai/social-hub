'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from './AuthProvider'

export default function Navigation() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  const navItems = [
    { href: '/members', label: 'Members' },
    { href: '/my-circle', label: 'My Circle' },
  ]

  const handleSignOut = async () => {
    await signOut()
    window.location.href = '/auth/login'
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/members" className="text-xl font-bold text-gray-900">
              The Hub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            {user && (
              <>
                <Link
                  href="/profile/edit"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Sign out
                </button>
              </>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                  pathname === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {user && (
              <>
                <Link
                  href="/profile/edit"
                  className="text-xs text-gray-600 hover:text-gray-900 px-2 py-1"
                >
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-xs text-gray-600 hover:text-gray-900 px-2 py-1"
                >
                  Sign out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
