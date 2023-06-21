export type Option = {
    label: string;
    value: string;
}
export type FormComponent =
    'text'
    | 'select'
    | 'range_picker'
    | 'textarea'

export type FormField = {
    name: string | string[];
    label: string;
    component: FormComponent;
    required?: boolean;
    options?: Option[];
}

export const schemaEventForm: FormField[] =
    [{
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
        name: 'startDate', //["startDate", "endDate"],
        component: "range_picker",
        label: "Date"
    },
    {
        name: "description",
        label: "Description",
        component: "textarea"
    }]
