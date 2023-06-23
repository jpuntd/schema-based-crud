import { useState, FC } from 'react'
import { Modal, Button, Space } from "antd"
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

  const onSubmit = (newEvent: Event) => {
    mutate(newEvent);
    setIsFormModalOpen(false);
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
      <Space></Space>
      <Modal title="Create event" open={isFormModalOpen} onCancel={handleFormModalCancel} footer={null}>
        <SchemaForm schema={eventFormSchema} onSubmit={onSubmit} />
      </Modal>
      <SchemaTable events={eventsData} />
    </section>)
}

export default EventsTable;