import { useRef } from 'react'
import { useDerivedBox } from 'blackbox.js'

import { authBox } from '@/stores/auth'
import { createTodo, deleteTodo } from '@/firebase/impl/todos'

import { preventDefault } from '@/utils/ui/modifiers'
import useSnapshot from '@/hooks/useSnapshot'

export default function Todos() {
  const formRef = useRef(null)
  const user = useDerivedBox(authBox, (state) => state.user)
  const todos = useSnapshot([], 'todos', 'user', user?.uid || '')

  const handleSubmit = async () => {
    const data = new FormData(formRef.current)

    const todo = {
      title: data.get('title'),
      description: data.get('description'),
      completed: false,
    }

    await createTodo(user, todo)

    formRef.current.reset()
  }

  return (
    <div>
      <h1>Hello, {user?.displayName}!</h1>
      <p>How are you today?</p>
      <hr />
      <h2>Add todo</h2>
      <form onSubmit={preventDefault(handleSubmit)} ref={formRef}>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" />
        </div>
        <button>Add todo</button>
      </form>
      <hr />
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.description}{' '}
            <button onClick={() => deleteTodo(user, todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
