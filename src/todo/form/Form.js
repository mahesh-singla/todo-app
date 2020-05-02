import React, { useState } from 'react'
import nextId from 'react-id-generator'

export default function Form() {
    const [todo, setTodo] = useState({
        id: '',
        name: ''
    })
    const handleChange = event => {
        setTodo({
            id: nextId(),
            name: event.target.value
        })
    }
    const handleClick = () => {
        let todos = localStorage.getItem('todos')
        let arr = []
        if (todos) {
            arr = JSON.parse(todos)
            arr.push(todo)
            localStorage.setItem('todos', JSON.stringify(arr))
        } else {
            arr.push(todo)
            localStorage.setItem('todos', JSON.stringify(arr))
        }
        setTodo({
            id: '',
            name: ''
        })
    }
    return (
        <div className="row mb-16">
            <div className="col-md-12">
                <br />
                <div className="input-group">
                <input
                    className="form-control"
                    autoFocus={true}
                    placeholder="Enter your todo"
                    value={todo.name}
                    onChange={event => handleChange(event)}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={handleClick}>
                        Add
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}
