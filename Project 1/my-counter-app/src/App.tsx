import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import ThemeToggle from "./components/ThemeToggle";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import styled from "styled-components";

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  text-align: center;
  align-items : center;
`;

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState<{ id: number; title: string; completed: boolean }[]>([]);

  // Load tasks from localStorage when the app starts
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever `tasks` change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Toggle Theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Add Task
  const addTask = (title: string) => {
    if (!title.trim()) return; // Prevent empty tasks
    const newTask = { id: Date.now(), title, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]); // Update state correctly
  };

  // Delete Task
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Toggle Task Completion
  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <GlobalStyles darkMode={darkMode} />
      <Container>
        <h1>Task Manager</h1>
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        <AddTaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleTaskCompletion} />
      </Container>
    </>
  );
};

export default App;
