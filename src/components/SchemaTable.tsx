import { Table } from "antd";
import { eventTableSchema, TableColumn } from "../schema/eventTable.schema";
import { Event } from "../services/api/events";

const columns = eventTableSchema.map((tableColumn: TableColumn) => {
  return {
    id: tableColumn.name,
    key: tableColumn.name,
    title: tableColumn.label,
    dataIndex: tableColumn.name
  }
});

type Props = {
  events: Event[];
}

const SchemaTable = ({ events }: Props) => {
  return <Table bordered={true} rowKey={'id'} dataSource={events} columns={columns} pagination={false} />
}

export default SchemaTable