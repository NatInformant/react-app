import React from 'react';
import {styled} from 'styled-components';

export const SortButtonContainer = styled.span(props => {
    return `
    display: inline-block;
    cursor: pointer;
    border: 2px solid #C4C4C4;
    border-radius: 6px;
    padding:0px 4px;
    text-align: center;
    align-items: center;
  `;
});
export const SortButton = ({sortValue, setValue}) => {

    const sortButtonTitles = ["Нет сортировки", "Сортировка по возрастанию", "Сортировка по убыванию"];
    const onSortButtonClickListener = () => {
        setValue((sortValue + 1) % 3);
    }

    return <SortButtonContainer onClick={() => onSortButtonClickListener()}>
        {(() => {
            switch (sortValue) {
                case 1:
                    return sortButtonTitles[1];
                case 2:
                    return sortButtonTitles[2];
                default:
                    return sortButtonTitles[0];
            }
        })()}
    </SortButtonContainer>
}