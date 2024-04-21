import React from "react";
import { useTodoStore } from "./useTodoStore";

export default function TodoList() {
  const [todoValue, setTodoValue] = React.useState("");
  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore(
    (state) => state
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(todoValue);
    setTodoValue("");
  };

  return (
    < >
      <form onSubmit={handleSubmit} className="grid justify-center text-sm font-medium leading-6 text-gray-900">
        <label htmlFor="new-todo">New Todo</label>
        <span className="flex max-w-xs justify-center">
          <input className="block w-full rounded-l-lg border-0 py-1.5 pl-7 pr-20 text-green-100 ring-1 ring-inset ring-orange-300 bg-orange-800 placeholder:text-green-100"
            placeholder="Text"
            type="text"
            id="new-todo"
            name="newTodo"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
          <button type="submit" className=" bg-yellow-400 text-green-700 rounded-r-lg p-2">Add</button>

        </span>
      </form>

      <ul className="container justify-center flex gap-6 flex-wrap mt-8">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="flex gap-5 bg-yellow-300 rounded-md shadow-lg  p-3">
              <div className="shadow-lg  p-3">
                <div className="shadow-lg  p-3">
                  <div className="shadow-lg  p-3">
                    <div className="w-80   ">
                      <h1 className="text-center text-green-700 mb-8">Text</h1>
                      <span className=" p-3 text-center text-green-700"
                        style={{
                          textDecoration: todo.isCompleted ? "line-through" : "unset"
                        }}
                      >
                        {todo.text}{" "}
                        
                      </span>
                      <div className=" flex justify-center mt-8 gap-6">
                        <button
                        onClick={() => deleteTodo(todo.id)}
                        className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => completeTodo(todo.id)}
                        className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
                      >
                        Complete
                      </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


              
             
            </li>
          );
        })}
      </ul>
    </>
  );
}
