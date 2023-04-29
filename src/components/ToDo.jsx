import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, clearTodo, remove } from "../features/todoSlice";

function Todo() {
  const items = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const inputText = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    // Clear the input box
    inputText.current.value = "";
  };

  return (
    <div>
      <hr />
      <h2>To do List</h2>
      <hr />
      <form onSubmit={(e) => submitForm(e)}>
        <input
          ref={inputText}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add to List</button>
      </form>
      <button onClick={() => dispatch(clearTodo())}>Clear</button>
      <ul>
        {items.map((todoItem, index) => {
          return (
            <li key={index} onClick={() => dispatch(remove(index))}>
              {todoItem}
            </li>
          );
        })}
      </ul>
      <hr />
    </div>
  );
}

export default Todo;
