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
        rules={formField.required ? [{ required: true, message: 'Required' }] : []}
    >
        <RangePicker defaultValue={[dayjs("2022-09-10 13:00"), dayjs("2022-09-12 16:00")]} />
    </Form.Item>;
}

export default FormItemRangePicker