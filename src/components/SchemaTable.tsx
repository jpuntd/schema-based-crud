import { Table } from "antd";
import { useQuery } from '@tanstack/react-query'
import { eventTableSchema, TableColumn } from "../schema/eventTable.schema";

const columns = eventTableSchema.map((tableColumn: TableColumn) => {
  return {
    id: tableColumn.name,
    key: tableColumn.name,
    title: tableColumn.label,
    dataIndex: tableColumn.name
  }
});

function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const searchTerm = 'start';
      const response = await fetch(`/events?s=${searchTerm}`).then(response => response.json())
      return response.events
    },
  })
}


const SchemaTable = () => {
  const { isLoading, isError, data, error } = useEvents()

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error?.message}</span>
  }

  return <Table bordered={true} rowKey={'id'} dataSource={data} columns={columns} pagination={false} />
}

export default SchemaTable