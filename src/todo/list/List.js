import React from 'react'

export default function List() {
    const todos = [{id: 1, name: 'mahesh'}, {id: 2, name: 'singla'}]

    const pluralize = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

    let header =
        todos.length === 0 ? (
            <h4>Yay! All todos are done! Take a rest!</h4>
        ) : (
        <h5 className="float-right">{pluralize(todos.length)}</h5>
    );
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {header}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {todos.map(todo => (
                <li key={todo.id} className="list-group-item">
                  {todo.name}
                  <button
                    className="float-right btn btn-danger btn-sm"
                    style={{ marginLeft: 10 }}
                  >
                    Complete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
