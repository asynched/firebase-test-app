import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import { firebaseConfig } from '@/firebase/config'

export const firebase = initializeApp(firebaseConfig)
export const database = getFirestore(firebase)
export const auth = getAuth(firebase)
