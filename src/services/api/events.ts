import axios from 'axios'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'

export type Event = Record<string, any>

export const useGetEvents = () => useQuery({
  queryKey: ['events'],
  queryFn: async () => {
    const searchTerm = 'start';
    const response = await fetch(`/events?s=${searchTerm}`).then(response => response.json())
    return response.events
  },
});

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newEvent: Event) => {
      return axios.post('/event', newEvent)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  });
};
