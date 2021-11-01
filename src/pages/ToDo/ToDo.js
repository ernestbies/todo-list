import React from "react";
import Layout from "../../components/Layout/Layout";
import {ToDoContainer, ToDoTitle} from "./ToDo.styles";
import ColoredText from "../../components/ColoredText/ColoredText";
import TaskAdd from "../../components/Task/TaskAdd";
import TaskList from "../../components/Task/TaskList";

const ToDo = () => {
    return (
        <Layout title={'Start'}>
            <ToDoContainer>
                <ToDoTitle>
                    <ColoredText>{'//'}</ColoredText>
                        {` What's your plan `}
                    <ColoredText>{'?'}</ColoredText>
                </ToDoTitle>
                <TaskAdd/>
                <TaskList/>
            </ToDoContainer>
        </Layout>
    );
};

export default ToDo;
