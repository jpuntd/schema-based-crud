import axios from 'axios'
import { useQuery, useMutation } from '@tanstack/react-query'

export type Event = Record<string, any>

export const useGetEvents = () => useQuery({
  queryKey: ['events'],
  queryFn: async () => {
    const searchTerm = 'start';
    const response = await fetch(`/events?s=${searchTerm}`).then(response => response.json())
    return response.events
  },
});

export const useCreateEvent = () => useMutation({
  mutationFn: (newEvent: Event) => {
    console.log({ mutationFn: newEvent })
    return axios.post('/event', newEvent)
  }
});

