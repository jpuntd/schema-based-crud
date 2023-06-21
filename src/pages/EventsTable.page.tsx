import { useState } from 'react'
import { Modal, Button } from "antd"
import SchemaTable from "../components/SchemaTable";
import SchemaForm from '../components/SchemaForm';
import { schemaEventForm } from '../mocks/schema'

const EventsTable = () => {
    const [isFormModalOpen, setIsformModalOpen] = useState(false);

    const showFormModal = () => {
        setIsformModalOpen(true)
    }
    const handleFormModalCancel = () => {
        setIsformModalOpen(false)
    };

    const handleOk = handleFormModalCancel

    return <section>
        <SchemaForm schema={schemaEventForm} />
        <Button type='primary' onClick={showFormModal}>Create</Button>
        <Modal title="Basic Modal" open={isFormModalOpen} onOk={handleOk} onCancel={handleFormModalCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
        <SchemaTable />
    </section>
}

export default EventsTable;