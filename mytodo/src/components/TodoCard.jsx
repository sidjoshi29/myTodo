import React from 'react'
//to render children components in compenents we use props and render otu the children from the props
export default function TodoCard(props) {
    const {children} = props
  return (
    <li className='todoItem'>
        {children}
        <div className = 'actionsContainer'>
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-trash"></i>
        </div>
        
    </li>
  )
}
