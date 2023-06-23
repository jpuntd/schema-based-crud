import { useState, FC } from 'react'
import { Modal, Button } from "antd"
import SchemaTable from "../components/SchemaTable";
import SchemaForm from '../components/SchemaForm';
import { eventFormSchema } from '../schema/eventForm.schema';
import { useCreateEvent, Event } from '../services/api/events';

const EventsTable: FC = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const { mutate, isLoading: isCreateEventLoading, isError: isCreateEventError } = useCreateEvent();

  const showFormModal = () => {
    setIsFormModalOpen(true)
  }
  const handleFormModalCancel = () => {
    setIsFormModalOpen(false)
  };

  const onSubmit = (newEvent: Event) => {
    event.preventDefault();
    mutate(newEvent);
    setIsFormModalOpen(false)
  }

  return <section>
    < Button type='primary' onClick={showFormModal} > Create</Button >
    <Modal title="Create event" open={isFormModalOpen} onCancel={handleFormModalCancel}>
      <SchemaForm schema={eventFormSchema} onSubmit={onSubmit} />
    </Modal>
    <SchemaTable />
  </section >
}

export default EventsTable;