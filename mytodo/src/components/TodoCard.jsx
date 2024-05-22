import React from 'react'
//to render children components in compenents we use props and render otu the children from the props
export default function TodoCard(props) {
    const {children, handleDeleteTodo, handleEditTodo, index} = props
  return (
    <li className='todoItem'>
        {children}
        <div className = 'actionsContainer'>
            <button onClick={() => {
                handleEditTodo(index)
            }}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => {
                handleDeleteTodo(index)
            }}>
                <i className="fa-solid fa-trash"></i>
            </button>

        </div>
        
    </li>
  )
}
