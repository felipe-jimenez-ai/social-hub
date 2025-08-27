import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-600">
          <p className="mb-2">
            Made with{' '}
            <span className="text-red-500 text-base">❤️</span>{' '}
            in Colombia by{' '}
            <span className="font-medium text-gray-900">AZ Tech</span>
            {' | '}
            <Link
              href="https://aztechnologies.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Website
            </Link>
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-900">
              Eng. Andrés Felipe Jiménez Pérez
            </span>
            {' | '}
            <Link
              href="https://www.linkedin.com/in/felipe-jimenez-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              LinkedIn
            </Link>
          </p>
          <p className="text-xs text-gray-500">
            © 2025 AZ Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
