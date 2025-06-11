import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import type { Todo } from './model'
import TodoList from './components/TodoList'

const App: React.FC  = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = (event: React.FormEvent) : void => {
    event.preventDefault()

    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  console.log(todos);
  

  return (
    <>
        <div className='App w-screen h-screen bg-[#2f74c0] flex items-center flex-col text-white'>
            <span className='uppercase text-5xl my-7 z-10 text-center md:my-4 md:text-4xl'>Taskify</span>

            <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    </>
  )
}

export default App
