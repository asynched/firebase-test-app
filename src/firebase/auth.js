import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/firebase'

export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, new GoogleAuthProvider())
  return result
}
