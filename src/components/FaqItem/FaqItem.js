import {FaqSubtext, FaqText, StyledItem} from "./FaqItem.styles";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboardList, faTasks, faThumbtack} from "@fortawesome/free-solid-svg-icons";
import ColoredAnchor from "../ColoredAnchor/ColoredAnchor";

const FaqItem = ({animate, type}) => {

    return (
        <StyledItem animate={animate}>
            {
                type === 'add' &&
                <>
                    <FontAwesomeIcon
                        icon={faThumbtack}
                        color={'#DC143C'}
                        style={{width: 50, height: 50}}
                    />
                    <FaqText>{'add task'}</FaqText>
                    <FaqSubtext>{'Add a new task by proceeding to the '}<ColoredAnchor
                        href={'/todo-list'}>{'START'}</ColoredAnchor>{' tab.'}</FaqSubtext>
                </>
            }
            {
                type === 'manage' &&
                <>
                    <FontAwesomeIcon
                        icon={faClipboardList}
                        color={'#DC143C'}
                        style={{width: 50, height: 50}}
                    />
                    <FaqText>{'manage todo list'}</FaqText>
                    <FaqSubtext>{'Add and remove tasks from your to-do list.'}</FaqSubtext>
                </>
            }
            {
                type === 'summary' &&
                <>
                    <FontAwesomeIcon
                        icon={faTasks}
                        color={'#DC143C'}
                        style={{width: 50, height: 50}}
                    />
                    <FaqText>{'organize your time'}</FaqText>
                    <FaqSubtext>{'Organize your time better regularly by using the app.'}</FaqSubtext>
                </>
            }
        </StyledItem>
    );
};

export default FaqItem;
