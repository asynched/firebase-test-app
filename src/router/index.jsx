import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useBox } from 'blackbox.js'

import { authBox } from '@/stores/auth'
import Home from '@/pages/Home'
import Todos from '@/pages/Todos'

export default function Router() {
  const auth = useBox(authBox)
  const navigate = useNavigate()

  useEffect(() => {
    auth.user ? navigate('/todos') : navigate('/')
  }, [auth])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  )
}
