import { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : " ");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            onChange={handleChange}
          />
          <button className="btn">Update todo</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={input}
            name="text"
            placeholder="Add a todo"
            onChange={handleChange}
          />
          <button className="btn">Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
