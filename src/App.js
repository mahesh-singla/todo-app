import React from 'react';
import './App.css'
import Form from './todo/form/Form'
import List from './todo/list/List'

export default function App() {
  return (
    <div className='container'>
      <h2>Todo List</h2>
      <Form />
      <List/>
    </div>
  )
}
