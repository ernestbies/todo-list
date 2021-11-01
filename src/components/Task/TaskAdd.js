import styled from 'styled-components';
import React, {useState} from "react";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const TaskAddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 500px;
    margin-top: 30px;
`;

const TaskAddInput = styled.input`
    border: 0;
    padding: 5px;
    font-family: ${({theme}) => theme.fontSecondary.family};
    font-size: ${({theme}) => theme.fontSecondary.size.lg}; 
    text-indent: 10px;
    flex: 6;
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.colors.primary};
    
    &:focus {
        outline: none !important;
        box-shadow: 0 -1px 2px ${({theme}) => theme.colors.primary},
                    0 1px 2px ${({theme}) => theme.colors.primary};
    }
`;

const TaskAddButton = styled.button`
    border: 0;
    height: 36px;
    font-family: ${({theme}) => theme.fontSecondary.family};
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
    flex: 1;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    transition: opacity 1s ease-in-out;
    
    ${TaskAddInput}:focus + & {
        box-shadow: 0 -1px 2px ${({theme}) => theme.colors.primary},
                    0 1px 2px ${({theme}) => theme.colors.primary};
    }
    
    &:disabled {
        cursor: auto;
        opacity: 0.5;
    }
`;

const DateTimeInput = styled.div`
    height: 36px;
    width: 40px;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 5px 0 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const renderInput = (props, openCalendar, date) => {
    return (
        <DateTimeInput {...props} onClick={openCalendar}>
            <FontAwesomeIcon
                icon={faCalendarAlt}
                color={'white'}
                style={{width: 20, height: 20}}
            />
            <FontAwesomeIcon
                icon={faCheckCircle}
                color={date ? '#00FF00' : '#DCDCDC'}
                style={{width: 10, height: 10, position: "absolute", top: 5, right: 5}}
            />
        </DateTimeInput>
    );
}

const TaskAdd = () => {

    const [date, setDate] = useState("");
    const [todo, setTodo] = useState("");


    return (<TaskAddContainer>
        <Datetime value={date} renderInput={(props, openCalendar) => renderInput(props, openCalendar, date)}
                  onChange={({_d}) => setDate(_d.getTime())}/>
        <TaskAddInput value={todo} placeholder={'Add a todo'} onChange={(e) => setTodo(e.target.value)}/>
        <TaskAddButton disabled={!date || !todo}>{'Add Todo'}</TaskAddButton>
    </TaskAddContainer>);
};

export default TaskAdd;
