import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore'
import { database } from '@/firebase'

export const createTodo = async (user, todo) => {
  const ref = collection(database, 'todos', 'user', user.uid)
  const doc = await addDoc(ref, {
    ...todo,
    createdAt: serverTimestamp(),
  })

  return doc
}

export const deleteTodo = async (user, id) => {
  const docRef = doc(collection(database, 'todos', 'user', user.uid), id)
  await deleteDoc(docRef)
}
