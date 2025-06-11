import React, { useEffect, useRef, useState } from 'react'
import type { Todo } from '../model'
import { CheckIcon, DeleteIcon, EditIcon } from 'lucide-react'

type Props = {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const editRef = useRef<HTMLInputElement>(null)

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = (event: React.FormEvent, id: number) => {
        event.preventDefault() 

        setTodos(todos.map((todo) => (
            todo.id === id ? {...todo, todo: editTodo} : todo
        )))

        setEdit(false)
    } 

    useEffect(() => {
        editRef.current?.focus()
    }, [edit])
    
  return (

    <form className='flex w-fit rounded-sm p-5 mt-4 bg-amber-600 items-center' onSubmit={(event) => handleEdit(event, todo.id)}>
        {edit ? (
                <input type='text' value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='border-0 outline-0 text-xl bg-white text-black rounded-sm p-1' ref={editRef} />
            ) : todo.isDone ? (
                <span className={`flex-1 p-1 border-0 text-xl focus:outline-0 ${todo.isDone && 'line-through'}`}>{todo.todo}</span>
            ) : (
                <span className={`flex-1 p-1 border-0 text-xl focus:outline-0 ${todo.isDone && 'line-through'}`}>{todo.todo}</span>
            )} 
        
        <div className='flex'>
            <span className='ml-3 text-2xl cursor-pointer' onClick={() => {
                if(!edit && !todo.isDone) {
                    setEdit(!edit)
                }
            }}><EditIcon /></span>
            <span className='ml-3 text-2xl cursor-pointer'  onClick={() => handleDelete(todo.id)}><DeleteIcon /></span>
            <span className='ml-3 text-2xl cursor-pointer' onClick={() => handleDone(todo.id)}><CheckIcon /></span>
        </div>
    </form>
  )
}

export default SingleTodo