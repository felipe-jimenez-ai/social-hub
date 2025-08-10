'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuth } from '@/components/AuthProvider'
import ProfileDisplay from '@/components/ProfileDisplay'
import type { Connection, Profile } from '@/types/database'
import Link from 'next/link'

interface ConnectionWithProfile extends Connection {
  profiles: Profile
}

export default function MyCirclePage() {
  const { user } = useAuth()
  const supabase = createClient()
  const [connections, setConnections] = useState<ConnectionWithProfile[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      loadConnections()
    }
  }, [user])

  const loadConnections = async () => {
    try {
      const { data, error } = await supabase
        .from('connections')
        .select(`
          *,
          profiles (*)
        `)
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setConnections(data || [])
    } catch (error) {
      console.error('Error loading connections:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteConnection = async (connectionId: string) => {
    try {
      const { error } = await supabase
        .from('connections')
        .delete()
        .eq('id', connectionId)

      if (error) throw error

      setConnections(prev => prev.filter(conn => conn.id !== connectionId))
    } catch (error) {
      console.error('Error deleting connection:', error)
      alert('Failed to remove connection. Please try again.')
    }
  }

  const handleUpdateNotes = async (connectionId: string, notes: string) => {
    try {
      const { error } = await supabase
        .from('connections')
        .update({ notes })
        .eq('id', connectionId)

      if (error) throw error

      setConnections(prev =>
        prev.map(conn =>
          conn.id === connectionId ? { ...conn, notes } : conn
        )
      )
    } catch (error) {
      console.error('Error updating notes:', error)
      alert('Failed to update notes. Please try again.')
    }
  }

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Circle</h1>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Circle</h1>
      
      {connections.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="text-gray-500 text-lg mb-2">Your circle is empty</p>
          <p className="text-gray-500 mb-6">
            Start building your circle by visiting the Members page and clicking "Remember" on profiles you want to keep track of.
          </p>
          <Link
            href="/members"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Browse Members
          </Link>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-6">
            You have {connections.length} connection{connections.length !== 1 ? 's' : ''} in your circle
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {connections.map((connection) => (
              <ConnectionCard
                key={connection.id}
                connection={connection}
                onDelete={handleDeleteConnection}
                onUpdateNotes={handleUpdateNotes}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ConnectionCard({
  connection,
  onDelete,
  onUpdateNotes,
}: {
  connection: ConnectionWithProfile
  onDelete: (id: string) => void
  onUpdateNotes: (id: string, notes: string) => void
}) {
  const [isEditingNotes, setIsEditingNotes] = useState(false)
  const [notesValue, setNotesValue] = useState(connection.notes || '')
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const handleSaveNotes = () => {
    onUpdateNotes(connection.id, notesValue)
    setIsEditingNotes(false)
  }

  const handleCancelNotes = () => {
    setNotesValue(connection.notes || '')
    setIsEditingNotes(false)
  }

  return (
    <>
      <div className="relative">
        <ProfileDisplay profile={connection.profiles}>
          <button
            onClick={() => setIsEditingNotes(!isEditingNotes)}
            className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 border border-blue-300 rounded hover:bg-blue-50"
          >
            {isEditingNotes ? 'Cancel' : 'Edit Notes'}
          </button>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="px-3 py-1 text-sm text-red-600 hover:text-red-800 border border-red-300 rounded hover:bg-red-50"
          >
            Remove
          </button>
        </ProfileDisplay>

        {/* Notes Section - Always visible below the card */}
        <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Your Notes:</h4>
          {isEditingNotes ? (
            <div className="space-y-3">
              <textarea
                value={notesValue}
                onChange={(e) => setNotesValue(e.target.value)}
                placeholder="Add notes about this connection..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                rows={3}
              />
              <div className="flex space-x-2">
                <button
                  onClick={handleSaveNotes}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelNotes}
                  className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-600">
              {connection.notes || 'No notes added yet.'}
            </p>
          )}
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Remove Connection</h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to remove {connection.profiles.display_name} from your circle?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  onDelete(connection.id)
                  setShowDeleteConfirm(false)
                }}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Remove
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
