import createBox from 'blackbox.js'
import { onAuthStateChanged } from 'firebase/auth'
import {} from 'react-router-dom'

import { auth } from '@/firebase'

export const authBox = createBox({
  user: null,
})

authBox.subscribe((state) => {
  console.log(state)
})

export function setUser(user) {
  authBox.set((state) => {
    state.user = user
    return state
  })
}

onAuthStateChanged(auth, (user) => {
  setUser(user)
})
