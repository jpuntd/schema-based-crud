import { Form, Input } from 'antd'
import { FormFieldGeneric } from '../formGenerator.types';

export type FormFieldText = {
    name: string;
    component: 'text';
} & FormFieldGeneric

const FormItemText = (formField: FormFieldText) => {
    return <Form.Item
        label={formField.label}
        name={formField.name}
        rules={formField.required ? [{ required: true, message: 'Required' }] : []}
    >
        <Input />
    </Form.Item>;
}

export default FormItemText;