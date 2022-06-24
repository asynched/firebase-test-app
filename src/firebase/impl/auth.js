import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/firebase'

export const loginWithGoogle = async () => {
  return await signInWithPopup(auth, new GoogleAuthProvider())
}
