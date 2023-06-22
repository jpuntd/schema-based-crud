import { axios } from 'axios'
import { useMutation } from '@tanstack/react-query'

const mutation = useMutation({
    mutationFn: (newEvent: Record<string, any>) => {
        return axios.post('/event', newEvent)
    }
});

