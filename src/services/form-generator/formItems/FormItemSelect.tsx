import { Form, Select } from 'antd';
import { FormFieldGeneric } from '../formGenerator.types';

type Option = {
    label: string;
    value: string;
    disabled?: boolean
}

export type FormFieldSelect = {
    name: string;
    component: 'select';
    options: Option[]
} & FormFieldGeneric

const FormItemSelect = (formField: FormFieldSelect) => {
    return <Form.Item
        label={formField.label}
        name={formField.name}
        rules={formField.required ? [{ required: true, message: 'Required' }] : []}
    >
        <Select options={formField.options} />
    </Form.Item>;
}

export default FormItemSelect