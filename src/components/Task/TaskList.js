import TaskItem from "./TaskItem";
import React from "react";
import styled, {keyframes} from 'styled-components';
import {connect} from "react-redux";

const fadeInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-25px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const StyledList = styled.div`
    margin: 50px 30px 80px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    animation: ${fadeInRight} 3s ease-in-out;
`;

const InfoText = styled.p`
    font-family: ${({theme}) => theme.fontSecondary.family};
    font-size: ${({theme}) => theme.fontSecondary.size.xl};
    text-align: center;
`;

const TaskList = ({todos}) => {

    const sortByProperty = (property) => {
        return function(a,b) {
            if(a[property] > b[property])
                return -1;
            else if(a[property] < b[property])
                return 1;

            return 0;
        }
    }

    return (
        <StyledList>
            {
                todos.length ?
                    todos.sort(sortByProperty('date')).map(e => <TaskItem key={e.id} id={e.id} text={e.text} date={e.date}/>)
                    :
                    <InfoText>{'Your list is empty. You have no work to do.'}</InfoText>
            }
        </StyledList>
    );
};

const mapStateToProps = ({todoReducer}) => (todoReducer);

export default connect(mapStateToProps, null)(TaskList);
