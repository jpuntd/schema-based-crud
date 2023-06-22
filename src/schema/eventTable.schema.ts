export type TableColumn = {
  name: String
  label: String
}
export const eventTableSchema: TableColumn[] = [
  {
    name: "title",
    label: "Title",
  },
  {
    name: "type",
    label: "Type",
  },
  {
    name: "startDate",
    label: "Date"
  },
  {
    name: "endDate",
    label: "Date"
  },
  {
    name: "description",
    label: "Description",
  }];
