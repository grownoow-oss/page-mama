import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthContext'
import AuthModal from '../components/AuthModal'
import { useState } from 'react'

export default function LoginPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (user) router.replace('/dashboard')
  }, [user, router])

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
      <AuthModal isOpen={open} onClose={() => router.push('/')} />
    </div>
  )
}
