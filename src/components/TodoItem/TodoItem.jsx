import React from 'react';
import styled, {css} from "styled-components"
import {TodoItemContainer} from './TodoItemContainer'
import {TodoItemCheckbox} from './TodoItemCheckbox';
import {useDeleteTodoItem} from "../../data/hooks/useData";

const checkedCss = css`
    color: #B5B5BA;
    text-decoration: line-through;
`

const Title = styled.span(props => {
    return `
    font-size: 15px;
    ${props.checked ? checkedCss : ''};
  `;
})

const Delete = styled.span`
    display: inline-block;
    width: 13px;
    height: 13px;
    background-image: url(assets/images/png/delete.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 13px;
    cursor: pointer;
`;

// на иконку удаления повесить обработчик, который будет вызывать alert об уверенности в удалении
// если confirm = true - вызываем удаление по id

export const TodoItem = ({title, itemId, checked}) => {
    const {mutate, isPending, isSuccess} = useDeleteTodoItem();

    const onDeleteClickListener = (itemId) => {
        const userConfirmed = window.confirm("Вы уверены, что хотите удалить этот элемент?");

        if (userConfirmed) {
            mutate({itemId: itemId});
        }
    }

    return (
        <TodoItemContainer>
            <TodoItemCheckbox checked={checked}/>
            <Title checked={checked}>
                {title}
            </Title>
            <Delete onClick={() => onDeleteClickListener(itemId)}/>
        </TodoItemContainer>
    )
}

//1. удаление элемента через confirm +
//2. перенос строки при длинном названии элемента - сделать css и подумать
//3. сделать возможность установки галочки(отметить элемент сделанным)
//4. сделать компонент внутри списка для установки приоритета
// (мужду кнопкой и текстом можно поставить спан с 3-мя вариантами приоритета, по нажатию приоритет должен выделиться, можно через select)
//5. Дописать функцию фильтрации элементов, начало препод напишет.
//6. Кнопка сортировки жлементов по списку c двумя вариантами по возрастанию и по убыванию

