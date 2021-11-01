import styled from 'styled-components';
import React from "react";
import LinesEllipsis from 'react-lines-ellipsis'

const StickyNote = styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
    border-top: 3px solid ${({theme}) => theme.colors.primary};
    border-bottom: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 5px 5px 0 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 1s ease-in-out;
    margin: 30px;
    
    &:hover {
        transform: scale(1.1);
    }
`;

export const NoteDate = styled.p`
    text-align: center;
    width: 100%;
    font-family: Roboto;
    font-weight: 100;
    height: 30px;
    line-height: 30px;
`;

export const NoteText = styled(LinesEllipsis)`
    text-align: center;
    font-family: Zen;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 14px;
    font-weight: 300;
`;

const TaskItem = () => {
    return (
        <StickyNote>
            <NoteDate>{'2010-01-01 14:00'}</NoteDate>
            <NoteText
                text='long long text long long long long long text long long long long long text long long long long long text long long long long long text long long long long long text long long long'
                maxLine='6'
                ellipsis='...'
                basedOn='letters'
            />
        </StickyNote>
    )
};

export default TaskItem;
