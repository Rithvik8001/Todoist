"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Pencil } from "lucide-react";
import { todo } from "node:test";

type Todo = {
  text: string;
  id: number;
  isCompleted: boolean;
};
export default function Page() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (todoInput == "") {
      alert("please add todo");
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      text: todoInput.trim(),
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setTodoInput("");
  };

  const markAsCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Card className="w-full max-w-2xl mt-20 ">
        <CardHeader>
          <CardTitle className="font-extrabold text-3xl">Add Todos</CardTitle>
          <CardDescription className="text-md">
            Manage your todos efficiently!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <Input
              value={todoInput}
              onChange={(e) => {
                setTodoInput(e.target.value);
              }}
              placeholder="Please add your todo"
            />
            <Button onClick={addTodo} className="ml-3">
              Add Todo
            </Button>
          </div>
        </CardContent>
      </Card>
      {todos.length > 0 && (
        <Card className="w-full max-w-2xl mt-8 mb-2">
          <CardHeader>
            <CardTitle className="font-bold text-xl">Your Todos</CardTitle>
          </CardHeader>
          <ul className="w-[97%] mx-auto">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="bg-violet-100 p-2 mx-3 my-3 rounded-md flex justify-between items-center"
              >
                <span
                  className={`flex-1 ${todo.isCompleted ? "line-through" : ""}`}
                >
                  {todo.text}
                </span>
                <Button
                  onClick={() => {
                    markAsCompleted(todo.id);
                  }}
                  variant="outline"
                  className="mr-2"
                >
                  Completed
                </Button>
                <Button
                  onClick={() => {
                    setTodos(todos.filter((t) => t.id !== todo.id));
                  }}
                  variant="destructive"
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
