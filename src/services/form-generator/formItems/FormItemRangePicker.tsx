import { Form, DatePicker } from 'antd';
import * as dayjs from 'dayjs'
import { FormFieldGeneric } from '../formGenerator.types';

const { RangePicker } = DatePicker;

export type FormFieldRangePicker = {
    name: string[];
    component: 'range_picker';
} & FormFieldGeneric

const FormItemRangePicker = (formField: FormFieldRangePicker) => {
    return <Form.Item
        label={formField.label}
        name={formField.name.join('|')}
        required={formField.required}
        rules={formField.required ? [{ required: true, message: 'Required' }] : []}
    >
        <RangePicker />
    </Form.Item>;
}

export default FormItemRangePicker