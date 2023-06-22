import { useState, FC } from 'react'
import { Modal, Button } from "antd"
import SchemaTable from "../components/SchemaTable";
import SchemaForm from '../components/SchemaForm';
import { eventFormSchema } from '../schema/eventForm.schema'

const EventsTable: FC = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const showFormModal = () => {
    setIsFormModalOpen(true)
  }
  const handleFormModalCancel = () => {
    setIsFormModalOpen(false)
  };

  const mutation = useMutation({
    mutationFn: (newEvent) => {
      return axios.post('/todos', newTodo)
    },
  })

  const onSubmit = (values: Record<string, any>) => {
    console.log(values);
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