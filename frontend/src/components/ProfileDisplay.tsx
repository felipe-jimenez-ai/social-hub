'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import type { Profile } from '@/types/database'
import SafeImage from './SafeImage'

interface ProfileDisplayProps {
  profile: Profile
  showLinkedIn?: boolean
  children?: React.ReactNode
}

export default function ProfileDisplay({ profile, showLinkedIn = true, children }: ProfileDisplayProps) {
  const [expanded, setExpanded] = useState(false)
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [expanded])
  
  // Close modal on escape key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpanded(false)
      }
    }
    
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])
  
  return (
    <div className="relative">
      {/* Modal overlay */}
      {expanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setExpanded(false)}
        >
          <div 
            className="bg-white rounded-lg p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200"
            style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal content - full profile */}
            <div className="flex justify-end">
              <button 
                onClick={() => setExpanded(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-start space-x-4 mb-6">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                {profile.profile_image ? (
                  <SafeImage
                    src={profile.profile_image}
                    alt={profile.display_name || 'Profile'}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-200">
                    <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Profile Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {profile.display_name || 'Anonymous'}
                </h3>
                <p className="text-base text-gray-600 mb-3">
                  {profile.title || 'No title provided'}
                </p>
              </div>
            </div>
            
            {/* Superpower */}
            {profile.superpower && (
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Superpower</h4>
                <p className="text-sm text-gray-600 whitespace-normal break-words">{profile.superpower}</p>
              </div>
            )}
            
            {/* Ask */}
            {profile.ask && (
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Kryptonite</h4>
                <p className="text-sm text-gray-600 whitespace-normal break-words">{profile.ask}</p>
              </div>
            )}
            
            {/* Actions */}
            <div className="flex justify-between items-center pt-4 mt-auto">
              <div>
                {showLinkedIn && profile.linkedin && (
                  <Link
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-[#0A66C2] border border-[#0A66C2] rounded-md text-sm font-medium text-white hover:bg-[#004182] hover:border-[#004182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A66C2]"
                  >
                    <svg className="w-4 h-4 mr-1 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.24-.49-2.08-1.71-2.08a1.86,1.86,0,0,0-1.74,1.26,2.31,2.31,0,0,0-.11.82v4.83h-3V9.74h3v1.3a3.38,3.38,0,0,1,3.05-1.69c2.23,0,3.51,1.45,3.51,4.59Z"/>
                    </svg>
                    LinkedIn
                  </Link>
                )}
              </div>
              
              <div className="flex space-x-2">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Regular card */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
        <div className="flex items-start space-x-4 mb-4">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            {profile.profile_image ? (
              <SafeImage
                src={profile.profile_image}
                alt={profile.display_name || 'Profile'}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-200">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
              {profile.display_name || 'Anonymous'}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {profile.title || 'No title provided'}
            </p>
          </div>
        </div>

        {/* Superpower */}
        {profile.superpower && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-1">Superpower</h4>
            <div className="relative">
              <p className="text-sm text-gray-600 line-clamp-3 overflow-hidden break-words">
                {profile.superpower}
              </p>
              {profile.superpower.length > 180 && (
                <div className="absolute bottom-0 right-0 bg-gradient-to-l from-white via-white to-transparent w-12 h-full"></div>
              )}
            </div>
          </div>
        )}

        {/* Ask */}
        {profile.ask && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-1">Kryptonite</h4>
            <div className="relative">
              <p className="text-sm text-gray-600 line-clamp-3 overflow-hidden break-words">
                {profile.ask}
              </p>
              {profile.ask.length > 180 && (
                <div className="absolute bottom-0 right-0 bg-gradient-to-l from-white via-white to-transparent w-12 h-full"></div>
              )}
            </div>
          </div>
        )}
        
        {/* Read more button - only show if text is long */}
        {((profile.superpower && profile.superpower.length > 180) || (profile.ask && profile.ask.length > 180)) && (
          <button
            onClick={() => setExpanded(true)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center mb-4"
          >
            View full profile
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        )}

        {/* Actions */}
        <div className="flex justify-between items-center mt-auto pt-4">
          <div>
            {showLinkedIn && profile.linkedin && (
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 bg-[#0A66C2] border border-[#0A66C2] rounded-md text-sm font-medium text-white hover:bg-[#004182] hover:border-[#004182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A66C2]"
              >
                <svg className="w-4 h-4 mr-1 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.24-.49-2.08-1.71-2.08a1.86,1.86,0,0,0-1.74,1.26,2.31,2.31,0,0,0-.11.82v4.83h-3V9.74h3v1.3a3.38,3.38,0,0,1,3.05-1.69c2.23,0,3.51,1.45,3.51,4.59Z"/>
                </svg>
                LinkedIn
              </Link>
            )}
          </div>
          
          {/* Custom actions */}
          <div className="flex space-x-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}