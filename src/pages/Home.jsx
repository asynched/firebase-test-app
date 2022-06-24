import { loginWithGoogle } from '@/firebase/auth'
import { setUser } from '@/stores/auth'

export default function Home() {
  const handleLogin = async () => {
    await loginWithGoogle()
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with google</button>
    </div>
  )
}
