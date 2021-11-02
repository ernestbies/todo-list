import styled from 'styled-components';
import React from "react";
import LinesEllipsis from 'react-lines-ellipsis'
import {StyledLogo} from "../Logo/Logo.styles";
import {deleteTodo} from "../../actions/todoActions";
import {connect} from "react-redux";

const StickyNote = styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
    border-top: 3px solid ${({theme}) => theme.colors.primary};
    border-bottom: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 5px 5px 0 0;
    display: flex;
    flex-direction: column;
    transition: all 1s ease-in-out;
    margin: 30px;
    position: relative;
    
    &:hover {
        transform: scale(1.1);
    }
`;

const NoteDate = styled.p`
    text-align: center;
    width: 100%;
    font-family: Roboto;
    font-weight: 100;
    height: 40px;
    line-height: 40px;
`;

const NoteText = styled(LinesEllipsis)`
    text-align: center;
    font-family: Zen;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 14px;
    font-weight: 300;
`;

const DeleteNoteButton = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 50%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: -10px;
    left: 0;
    right: 0;
    text-align: center;
    cursor: pointer;
    
    &:after {
        content: "x";
        color: white;
    }
`;

const TaskItem = ({id, text, date, deleteTodo}) => {

    const convertDate = (date) => new Date(date -  new Date(date).getTimezoneOffset() * 60000);

    const formatDate = (date) => new Date(convertDate(date)).toISOString().slice(0, 19)
        .replace("T", " ");

    return (
        <StickyNote>
            <DeleteNoteButton onClick={() => deleteTodo(id)}/>
            <NoteDate>{formatDate(date)}</NoteDate>
            <NoteText
                text={text}
                maxLine='4'
                ellipsis='...'
                basedOn='letters'
            />
            <StyledLogo style={{
                position: 'absolute', bottom: 20, left: 0,
                right: 0, marginLeft: 'auto', marginRight: 'auto'
            }}/>
        </StickyNote>
    )
};

const mapStateToProps = ({todoReducer}) => (todoReducer);
const mapDispatchToProps = {deleteTodo};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);

