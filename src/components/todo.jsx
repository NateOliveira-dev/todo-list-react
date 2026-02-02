import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button
          className="complete"
          onClick={() => completeTodo(todo.id)}
          style={{ backgroundColor: todo.isCompleted ? "#6c757d" : "#28a745" }}
        >
          {todo.isCompleted ? "Desfazer" : "Completar"}
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
