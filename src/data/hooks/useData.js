import {LocalStorage} from '../services/LocalStorage';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {TodoItem} from '../entity/TodoItem'

export const useData = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['todo'],
        queryFn: LocalStorage.getTodoItemsFromLocalStorage,
    });

    return {
        data,
        isLoading,
    };
}

export const useSaveNewTodoItem = () => {
    const client = useQueryClient();

    const {mutate, isPending, isSuccess} = useMutation({
        mutationFn: ({title}) => {
            const newTodoItem = new TodoItem(new Date().getTime(), title, false, 1);
            return LocalStorage.saveTodoItemToLocalStorage(newTodoItem)
        },
        onSuccess: () => {
            client.invalidateQueries(['todo']);
        },
    });

    return {
        mutate,
        isPending,
        isSuccess
    }
}

export const useDeleteTodoItem = () => {
    const client = useQueryClient();

    const {mutate, isPending, isSuccess} = useMutation({
        mutationFn: ({itemId}) => {
            return LocalStorage.deleteTodoItemFromLocalStorage(itemId)
        },
        onSuccess: () => {
            client.invalidateQueries(['todo']);
        },
    });

    return {
        mutate,
        isPending,
        isSuccess
    }
}

export const useCheckTodoItem = () => {
    const client = useQueryClient();

    const {mutate, isPending, isSuccess} = useMutation({
        mutationFn: ({itemId}) => {
            return LocalStorage.checkTodoItemFromLocalStorage(itemId)
        },
        onSuccess: () => {
            client.invalidateQueries(['todo']);
        },
    });

    return {
        mutate,
        isPending,
        isSuccess
    }
}

export const usePriorityTodoItem = () => {
    const client = useQueryClient();

    const {mutate, isPending, isSuccess} = useMutation({
        mutationFn: ({priority,itemId}) => {
            return LocalStorage.updateTodoItemPriorityInLocalStorage(priority, itemId)
        },
        onSuccess: () => {
            client.invalidateQueries(['todo']);
        },
    });

    return {
        mutate,
        isPending,
        isSuccess
    }
}