import AuthLayout from '@/components/AuthLayout';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Achievers Hub",
};

export default function AuthLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  )
}
