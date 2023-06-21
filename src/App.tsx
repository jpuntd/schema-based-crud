import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import EventsTable from './pages/EventsTable.page'
import './App.css'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <EventsTable />
    </QueryClientProvider>
  )
}

export default App
