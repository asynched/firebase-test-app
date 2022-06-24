import { loginWithGoogle } from '@/firebase/impl/auth'

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
