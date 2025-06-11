import React from 'react'
import type { Todo } from '../model'
import SingleTodo from './SingleTodo'

type Props =  {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='flex justify-between width-9/10 flex-wrap gap-4 '>
        {todos.map((todo) => (
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  )
}

export default TodoList