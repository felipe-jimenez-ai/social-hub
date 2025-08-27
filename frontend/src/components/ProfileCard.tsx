'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuth } from './AuthProvider'
import ProfileDisplay from './ProfileDisplay'
import type { Profile } from '@/types/database'

interface ProfileCardProps {
  profile: Profile
  onConnectionSaved?: () => void
  isRemembered?: boolean
}

export default function ProfileCard({ profile, onConnectionSaved, isRemembered = false }: ProfileCardProps) {
  const { user } = useAuth()
  const supabase = createClient()
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(isRemembered)

  // Update saved state when isRemembered prop changes
  useEffect(() => {
    setSaved(isRemembered)
  }, [isRemembered])

  const handleRemember = async () => {
    if (!user || saving) return

    setSaving(true)
    try {
      const { error } = await supabase
        .from('connections')
        .insert({
          user_id: user.id,
          connection_id: profile.id,
          notes: '' // Empty notes for now, user can edit later
        })

      if (error) {
        // If it's a duplicate connection error, that's okay
        if (error.code === '23505') {
          setSaved(true)
        } else {
          throw error
        }
      } else {
        setSaved(true)
        onConnectionSaved?.()
      }
    } catch (error) {
      console.error('Error saving connection:', error)
      alert('Failed to save connection. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  // Don't show card for current user
  if (user?.id === profile.id) {
    return null
  }

  return (
    <ProfileDisplay profile={profile}>
      <button
        onClick={handleRemember}
        disabled={saving || saved}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          saved
            ? 'bg-green-100 text-green-800 cursor-default'
            : 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50'
        }`}
      >
        {saving ? 'Saving...' : saved ? 'Remembered ✓' : 'Remember'}
      </button>
    </ProfileDisplay>
  )
}
