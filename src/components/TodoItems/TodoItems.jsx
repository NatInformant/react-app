import React, {useState} from 'react';
import {TodoItemsContainer} from './TodoItemsContainer';
import {NewTodoItem} from '../TodoItem/NewTodoItem';
import {TodoItem} from '../TodoItem/TodoItem';
import {useData} from '../../data/hooks/useData';
import {SearchInput} from './components/SearchInput';

export const TodoItems = () => {
  const [searchValue, setSearchValue] = useState('');

  const {data: todoItems, isLoading} = useData();

  if (!todoItems || isLoading) {
    return (
      <TodoItemsContainer>
        Загрузка данных...
      </TodoItemsContainer>
    );
  }

  //добавить контролируемый инпут над списком элементов
  //значение инпута храниться в локальном стейте
  //при вводе в инпут нужно проводить фильтрацию элементов
  //фильтр должен быть нерегистрозависимым
  //фильтр должен игнорировать пробелы
  //фильтр начинает работать от 3 символов
  //нужно использовать функцию filter у массива


  //Добавляем кнопку сортировки
  //значение текущей сортировки храниться в локальном стейте
  //перед выводом элементов нужно провести сортировку с помощью метода sort


  // Фукнция filter вызывает для каждого элемента переданный ей колбек
  // И формирует в filteredBySearchItems новый массив элементов, для которых колбек вернул true
  // Для проверки вхождения подстроки в строку нужно использовать indexOf
  const filteredBySearchItems = todoItems.filter((todoItem) => {
    // const clearedTodoItemTitle = очистка от пробелов + приведение к одному из регистров
    // const clearedSearchValue = очистка от пробелов + приведение к одному из регистров
    // const isSearched = проверка вхождения строки поиска в строку заголовка
    // return isSearched
    return true; // удалить после реализации фильтрации
  })


  const todoItemsElements = filteredBySearchItems.map((item, index) => {
    return <TodoItem key={item.id} itemId={item.id} title={item.title} checked={item.isDone} />;
  });

  return (
    <TodoItemsContainer>
      <SearchInput value={searchValue} />
      {todoItemsElements}
      <NewTodoItem />
    </TodoItemsContainer>
  )
}