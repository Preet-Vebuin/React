import React from "react";
import Task from "./Task";
import styled from "styled-components";

type TaskListProps = {
  tasks: { id: number; title: string; completed: boolean }[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
};

const ListContainer = styled.div`
  margin-top: 20px;
`;

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggleComplete }) => {
  return (
    <ListContainer>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggleComplete={onToggleComplete} />
      ))}
    </ListContainer>
  );
};

export default TaskList;
