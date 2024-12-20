import styled, {css} from "styled-components";
import {usePriorityTodoItem} from "../../data/hooks/useData";


const checkedCss = css`
    background-color: #ffd600;
    background-position: center;
    background-repeat: no-repeat;
`

export const PriorityContainer = styled.span(props => {
    return `
    display: inline-block;
    cursor: pointer;
    border: 2px solid #C4C4C4;
    border-radius: 6px;
    padding:0px 4px;
    text-align: center;
    align-items: center;
    ${props.checked ? checkedCss : ''}
  `;
});


export const TodoItemPriority = ({priorityChecked, priority, itemId}) => {
    const {mutate, isPending, isSuccess} = usePriorityTodoItem();

    const onPriorityClickListener = (priority, itemId) => {
        mutate({priority: priority, itemId: itemId});
    }

    return <PriorityContainer  checked={priorityChecked} onClick={() => onPriorityClickListener(priority, itemId)}>
        {priority}
    </PriorityContainer>
}