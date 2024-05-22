
//functional component
import React from 'react'
import TodoCard from './Todocard'

export default function TodoList(props) {
  const {todos} = props
  return (
    ///use map because its iteration without looping and whatever is in the arrow function, its applied to all elements in list
    <ul className='main'>
        {todos.map((todo, idx) => {
        return (
            <TodoCard key = {idx}>
                <p>{todo}</p>
            </TodoCard>
        )
    })}
    </ul>
  )
}
