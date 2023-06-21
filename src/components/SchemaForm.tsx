/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "^_ }]*/
import { Form, Input } from 'antd'
import { schemaEventForm, FormField, FormComponent } from "../mocks/schema"

const createText = (formField: FormField) => {
  return <Form.Item
    label={formField.label}
    name={formField.name}
    rules={formField.required ? [{ required: true, message: 'Required' }] : []}
  >
    <Input />
  </Form.Item>

}


const createTextArea = (formField: FormField) => {
  return <Form.Item
    label={formField.label}
    name={formField.name}
    rules={formField.required ? [{ required: true, message: 'Required' }] : []}
  >
    <Input.TextArea />
  </Form.Item>
}

const formFieldGenerator = {
  'text': createText,
  'textarea': createTextArea,
  'select': createText,
  'range_picker': createText

}

type Props = {
  schema2?: FormField[]
}

const schema: FormField[] = [{
  name: "title",
  label: "Title",
  component: "text",
  required: true
},

{
  name: "description",
  label: "Description",
  component: "textarea"
}]

const createFormItem = (formField: FormField) => {
  switch (formField.component) {
    case 'text':
      return createText(formField)
    case 'textarea':
      return createTextArea(formField)
    case 'select':
      return createText(formField)
    case 'range_picker':
      return createText(formField)
    default:
      const _exhaustiveCheck: never = formField.component;
  }
  return formFieldGenerator[formField.component](formField)
}


const SchemaForm = ({ schema2 }: Props) => {

  return <Form>{schema.map(createFormItem)}</Form>
}

export default SchemaForm;