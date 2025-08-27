'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuth } from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'
import SafeImage from '@/components/SafeImage'

export default function EditProfilePage() {
  const { user } = useAuth()
  const router = useRouter()
  const supabase = createClient()
  
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    display_name: '',
    title: '',
    superpower: '',
    ask: '',
    linkedin: '',
    profile_image: ''
  })

  const loadProfile = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single()

      if (error && error.code !== 'PGRST116') {
        throw error
      }

      if (data) {
        setFormData({
          display_name: data.display_name || '',
          title: data.title || '',
          superpower: data.superpower || '',
          ask: data.ask || '',
          linkedin: data.linkedin || '',
          profile_image: data.profile_image || ''
        })
      }
    } catch (error) {
      console.error('Error loading profile:', error)
      setError('Failed to load profile')
    } finally {
      setLoading(false)
    }
  }, [supabase, user?.id])

  useEffect(() => {
    if (user) {
      loadProfile()
    }
  }, [user, loadProfile])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    setSuccess(false)

    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user?.id,
          display_name: formData.display_name,
          title: formData.title,
          superpower: formData.superpower,
          ask: formData.ask,
          linkedin: formData.linkedin,
          profile_image: formData.profile_image
        })

      if (error) throw error

      setSuccess(true)
      setTimeout(() => {
        router.push('/members')
      }, 1500)
    } catch (error) {
      console.error('Error saving profile:', error)
      setError('Failed to save profile')
    } finally {
      setSaving(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-10 min-h-[600px] lg:min-h-[900px] w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Profile</h1>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md mb-6">
            Profile saved successfully! Redirecting to members page...
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Profile Image Preview */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex-shrink-0">
              {formData.profile_image ? (
                <SafeImage
                  src={formData.profile_image}
                  alt="Profile preview"
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-gray-200"
                />
              ) : (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-200">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex-1 w-full sm:w-auto">
              <label htmlFor="profile_image" className="block text-sm font-medium text-gray-700">
                Profile Image URL
              </label>
              <input
                type="url"
                id="profile_image"
                name="profile_image"
                value={formData.profile_image}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                placeholder="https://example.com/your-photo.jpg"
              />
              <div className="mt-2 w-full">
                <p className="text-xs text-gray-500 mb-2">
                  Optional: Add a URL to your profile photo from any public source
                </p>
                
                <div className="space-y-2 w-full">
                  {/* LinkedIn Instructions */}
                  <details className="text-xs text-gray-600 bg-blue-50 rounded-md p-2 sm:p-3 border border-blue-200 w-full">
                    <summary className="cursor-pointer font-medium text-blue-700 hover:text-blue-800 text-xs sm:text-sm">
                      💡 How to get your LinkedIn photo URL
                    </summary>
                    <div className="mt-2 w-full">
                      <ol className="space-y-1 list-decimal list-inside text-gray-700 text-xs">
                        <li>Go to your LinkedIn profile page</li>
                        <li>Right-click on your profile photo</li>
                        <li>Select <strong>&quot;Copy image address&quot;</strong> or <strong>&quot;Copy image URL&quot;</strong></li>
                        <li>Paste the URL in the field above</li>
                      </ol>
                      <p className="mt-2 text-xs text-blue-600">
                        <strong>Note:</strong> Make sure your LinkedIn profile is public or the photo won&apos;t be visible to others
                      </p>
                    </div>
                  </details>

                  {/* Other Sources */}
                  <details className="text-xs text-gray-600 bg-gray-50 rounded-md p-2 sm:p-3 border border-gray-200 w-full">
                    <summary className="cursor-pointer font-medium text-gray-700 hover:text-gray-800 text-xs sm:text-sm">
                      🔗 Other photo sources
                    </summary>
                    <div className="mt-2 w-full">
                      <ul className="space-y-1 list-disc list-inside text-gray-600 text-xs">
                        <li><strong>GitHub:</strong> https://github.com/yourusername.png</li>
                        <li><strong>Gravatar:</strong> Use your Gravatar image URL</li>
                        <li><strong>Google Drive:</strong> Share a photo publicly and use the direct link</li>
                        <li><strong>Any website:</strong> Right-click any public photo and copy image URL</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="display_name" className="block text-sm font-medium text-gray-700">
              Display Name *
            </label>
            <input
              type="text"
              id="display_name"
              name="display_name"
              required
              value={formData.display_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
              placeholder="How you'd like to be called"
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Professional Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
              placeholder="e.g., Software Engineer, Product Manager"
            />
          </div>

          <div>
            <label htmlFor="superpower" className="block text-sm font-medium text-gray-700">
              <span className="flex items-center gap-2 mb-1">
                <span><strong>Your Superpower *</strong></span>
              </span>
              <span className="block text-sm font-normal text-gray-600">
                What is a key skill you are willing to share? What are you exceptional at and can help others with?
                <br />
                Be specific. E.g., &quot;I&apos;m a whiz with financial models in Excel&quot; or &quot;I can build an effective landing page.&quot;
              </span>
            </label>
            <textarea
              id="superpower"
              name="superpower"
              required
              rows={3}
              value={formData.superpower}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
              placeholder="What are you great at? What do you love helping others with?"
            />
          </div>

          <div>
            <label htmlFor="ask" className="block text-sm font-medium text-gray-700">
              <span className="flex items-center gap-2 mb-1">
                <span><strong>Your Kryptonite *</strong></span>
              </span>
              <span className="block text-sm font-normal text-gray-600">
                What is a specific challenge you need help with right now? What do you urgently need assistance with?
                <br />
                E.g., &quot;I need feedback on a presentation for investors&quot; or &quot;I&apos;m looking for someone to practice my English with.&quot;
              </span>
            </label>
            <textarea
              id="ask"
              name="ask"
              required
              rows={3}
              value={formData.ask}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
              placeholder="What do you need help with? What are you looking to learn or achieve?"
            />
          </div>

          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.24-.49-2.08-1.71-2.08a1.86,1.86,0,0,0-1.74,1.26,2.31,2.31,0,0,0-.11.82v4.83h-3V9.74h3v1.3a3.38,3.38,0,0,1,3.05-1.69c2.23,0,3.51,1.45,3.51,4.59Z"/>
              </svg>
              <span>LinkedIn Profile</span>
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                placeholder="https://www.linkedin.com/in/your-profile"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-500 flex items-center space-x-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Add your LinkedIn profile URL to help others connect with you</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 bg-blue-600 text-white py-3 sm:py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
            >
              {saving ? 'Saving...' : 'Save Profile'}
            </button>
            
            <button
              type="button"
              onClick={() => router.push('/members')}
              className="flex-1 bg-gray-200 text-gray-800 py-3 sm:py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}