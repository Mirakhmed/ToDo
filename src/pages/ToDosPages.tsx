import React, {useState, useEffect} from 'react';
import {ToDoForm} from "../components/ToDoForm";
import {ToDoList} from "../components/ToDoList";
import {iToDo} from "../interfaces";

declare var confirm: (question: string) => boolean;

export const ToDosPage: React.FC = () => {
    const [todos, setTodos] = useState<iToDo[]>([]);

    useEffect(() => {
        const  saved = JSON.parse(localStorage.getItem('todos') || '') as iToDo[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addHandler = (title: string) => {
        const newToDo: iToDo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        setTodos(prev => [newToDo, ...prev])
    };

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if(todo.id === id) {
                todo.completed = true //!todo.completed
            }
            return todo;
        }))
    };

    const removeHandler = (id: number) => {
        const shouldRemove = confirm('Are you sure?');
        if(shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    };

    return (
        <>
            <ToDoForm onAdd={addHandler} />

            <ToDoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
        </>
    )
}