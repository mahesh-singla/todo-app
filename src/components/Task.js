import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import {RiDeleteBinLine, RiEdit2Line} from "react-icons/ri";

function Task({ task }) {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <RiDeleteBinLine/>
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <RiEdit2Line/>
        </button>
      </div>
    </li>
  )
}

export default Task