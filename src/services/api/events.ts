import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

export type Event = Record<string, any>

const CREATE_EVENT_QUERY_KEY = 'createEvent'
/* 
export const useCreateEvent = () => {
    return useMutation<Event>(CREATE_EVENT_QUERY_KEY, {
        onSuccess: (newEvent) => {
            // invalidate the query cache for 'books'
            //queryClient.invalidateQueries(BOOK_LIST_QUERY_KEY);
        },
        onError: (error) => {
            // handle error
        },
    });
};
*/

export const useCreateEvent = () => useMutation({
    mutationFn: (newEvent: Event) => {
        console.log({ mutationFn: newEvent })
        return axios.post('/event', newEvent)
    }
});

