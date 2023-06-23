import { useState, FC } from 'react'
import { Modal, Button } from "antd"
import { useQueryClient } from '@tanstack/react-query';
import SchemaTable from "../components/SchemaTable";
import SchemaForm from '../components/SchemaForm';
import { eventFormSchema } from '../schema/eventForm.schema';
import { useGetEvents, useCreateEvent, Event } from '../services/api/events';

const EventsTable: FC = () => {
  const queryClient = useQueryClient()
  const { isLoading: isGetEventsLoading, isError: isGetEventsError, data: eventsData } = useGetEvents()
  const { mutate, isLoading: isCreateEventLoading, isError: isCreateEventError } = useCreateEvent();

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const showFormModal = () => {
    setIsFormModalOpen(true)
  }
  const handleFormModalCancel = () => {
    setIsFormModalOpen(false)
  };

  const refetchEvents = async () => {
    await queryClient.invalidateQueries({ queryKey: ['events'] })
  }

  const onSubmit = (newEvent: Event) => {
    event.preventDefault();
    mutate(newEvent);
    setIsFormModalOpen(false);
    refetchEvents();
  }

  if (isGetEventsLoading) {
    return <span>Loading...</span>
  }

  if (isGetEventsError) {
    return <span>Error loading events list. Please try again.</span>
  }

  return (
    <section>
      <Button type='primary' onClick={showFormModal}> Create</Button >
      <Modal title="Create event" open={isFormModalOpen} footer={null}>
        <SchemaForm schema={eventFormSchema} onSubmit={onSubmit} />
      </Modal>
      <SchemaTable events={eventsData} />
    </section>)
}

export default EventsTable;