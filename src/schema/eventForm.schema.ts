import { FormField } from '../services/form-generator/formGenerator'
export const eventFormSchema: FormField[] = [
  {
    name: "title",
    label: "Title",
    component: "text",
    required: true
  },
  {
    name: "type",
    component: "select",
    label: "Type",
    options: [
      {
        "label": "Generic",
        "value": "generic",
      },
      {
        "label": "Holiday",
        "value": "holiday",
      }
    ]
  },
  {
    name: ["startDate", "endDate"],
    component: "range_picker",
    label: "Date"
  },
  {
    name: "description",
    label: "Description",
    component: "textarea"
  }];


