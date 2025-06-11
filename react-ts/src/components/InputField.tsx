import React, { useRef } from 'react'

type Props = {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAddTodo: (event: React.FormEvent) => void
}

const InputField:React.FC<Props> = ({todo, setTodo, handleAddTodo}) => {
  const inputRef = useRef<HTMLInputElement>(null)


  return (
    <form className='flex w-9/10 relative items-center' onSubmit={(event) => {
      handleAddTodo(event)
      inputRef.current?.blur()
      }}>
        <input  type='input' placeholder='Enter a task' className='w-full rounded-full py-4 px-5 border-0 duration-200 shadow-sm focus:shadow-lg bg-white text-black text-xl font-medium outline-0' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref= {inputRef}
        />
        <button className='absolute w-12 h-12 m-3 rounded-full right-0 border-0 text-base bg-[#2f74c0] duration-200 shadow-md hover:bg-[#388ae2] active:scale-75 active:shadow-sm' type='submit'>Go</button>
    </form>
  )
} 

export default InputField