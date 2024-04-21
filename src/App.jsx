import React from "react";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="App">
      <div className="container  px-4 bg-orange-500 justify-center text-center">
        <h1 className="font-semibold text-2xl">Todo list App with Zustand</h1>
          <TodoList />
      
      </div>
    </div>
  );
}