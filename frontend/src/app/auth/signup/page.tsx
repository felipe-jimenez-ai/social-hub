'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/components/AuthProvider';

export default function SignupPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect all traffic from signup to the access page
    router.push('/access');
  }, [router]);

  // Return null to prevent rendering any signup content
  return null;
}
