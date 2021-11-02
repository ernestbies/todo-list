import React from "react";
import Layout from "../../components/Layout/Layout";
import {ToDoContainer, ToDoTitle} from "./ToDo.styles";
import ColoredText from "../../components/ColoredText/ColoredText";
import TaskAdd from "../../components/Task/TaskAdd";
import TaskList from "../../components/Task/TaskList";
import SectionTag from "../../components/SectionTag/SectionTag";

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
            <SectionTag animate={true}>
                <ColoredText fontWeight={'bold'}>{'#LIST //'}</ColoredText>
                {'toDO - plan your future'}
            </SectionTag>
        </Layout>
    );
};

export default ToDo;
