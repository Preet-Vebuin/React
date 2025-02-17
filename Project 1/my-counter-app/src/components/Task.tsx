import React from "react";
import styled from "styled-components";

type TaskProps = {
  task: { id: number; title: string; completed: boolean };
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
};

const TaskContainer = styled.div<{ completed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${({ completed }) => (completed ? "#d4edda" : "#f8d7da")};
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const TaskTitle = styled.p<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  flex-grow: 1;
  cursor: pointer;
`;

const Task: React.FC<TaskProps> = ({ task, onDelete, onToggleComplete }) => {
  return (
    <TaskContainer completed={task.completed}>
      <TaskTitle completed={task.completed} onClick={() => onToggleComplete(task.id)}>
        {task.title}
      </TaskTitle>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </TaskContainer>
  );
};

export default Task;
