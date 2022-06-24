import { useEffect, useState } from 'react'
import { database } from '@/firebase'
import { collection, onSnapshot } from 'firebase/firestore'

export default function useSnapshot(defaultValue, ...pathSegments) {
  const [snapshot, setSnapshot] = useState(defaultValue)

  const ref = collection(database, ...pathSegments)

  useEffect(() => {
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setSnapshot(data)
    })

    return unsubscribe
  }, [])

  return snapshot
}
