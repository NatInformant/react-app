import {TodoItem} from "../entity/TodoItem";

const TODO_ITEMS_LOCAL_STORAGE_KEY = 'TODO_ITEMS_LOCAL_STORAGE_KEY';

export const LocalStorage = {
    getTodoItemsFromLocalStorage: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const rawData = localStorage.getItem(TODO_ITEMS_LOCAL_STORAGE_KEY);
                const defaultResult = [];

                if (!rawData) {
                    resolve(defaultResult);
                    return;
                }
                const data = JSON.parse(rawData);

                if (!Array.isArray(data)) {
                    resolve(defaultResult);
                    return;
                }

                resolve(data);
            }, 500);
        })
    },

    saveTodoItemToLocalStorage: (todoItem) => {
        return new Promise((resolve, reject) => {
            LocalStorage.getTodoItemsFromLocalStorage().then((todoItems) => {
                const newTodoItems = [...todoItems, todoItem];
                localStorage.setItem(TODO_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(newTodoItems));
                resolve();
            })
        });
    },

    deleteTodoItemFromLocalStorage: (todoItemId) => {
        // получить массив элеметов
        // сделать фельтр по элементам через функцию filter (оставить только нужные элементы)
        // сохранить отфильтрованный список в ls

        return new Promise((resolve, reject) => {
            const rawData = localStorage.getItem(TODO_ITEMS_LOCAL_STORAGE_KEY);
            const data = JSON.parse(rawData);
            const newTodoItems = data.filter((item) => item.id !== todoItemId)
            localStorage.setItem(TODO_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(newTodoItems));
            resolve();
        });
    },

    checkTodoItemFromLocalStorage: (todoItemId) => {
        return new Promise((resolve, reject) => {
            const rawData = localStorage.getItem(TODO_ITEMS_LOCAL_STORAGE_KEY);
            const data = JSON.parse(rawData);

            const newTodoItems = data.map(item => {
                if (item.id === todoItemId) {
                    return new TodoItem(item.id, item.title, !item.isDone);
                }
                return item;
            });

            localStorage.setItem(TODO_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(newTodoItems));
            resolve();
        });
    }
}