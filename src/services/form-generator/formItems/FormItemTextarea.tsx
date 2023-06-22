import { Form, Input } from 'antd'
import { FormFieldGeneric } from '../formGenerator.types';

export type FormFieldTextarea = {
  name: string;
  component: 'textarea';
} & FormFieldGeneric

const FormItemTextarea = (formField: FormFieldTextarea) => {
  return (
    <Form.Item
      label={formField.label}
      name={formField.name}
      required={formField.required}
      rules={formField.required ? [{ required: true, message: 'Required' }] : []}
    >
      <Input.TextArea />
    </Form.Item>)
}

export default FormItemTextarea
