import TaskItem from "./TaskItem";
import React from "react";
import styled from 'styled-components';

const StyledList = styled.div`
    margin-top: 80px;
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const TaskList = () => {
    return (<StyledList>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
    </StyledList>)
};

export default TaskList;
