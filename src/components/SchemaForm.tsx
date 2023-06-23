import { useState } from 'react';
import { Form, Button } from 'antd'
import { generateFormItem, getFormFieldValues, FormField } from '../services/form-generator/formGenerator';

type Props = {
  schema: FormField[];
  onSubmit: (values: Record<string, any>) => void;
}

const SchemaForm = ({ schema, onSubmit }: Props) => {
  const [form] = Form.useForm();

  const [isDisabledSave, setIsDisabledSave] = useState(true);

  const handleFormChange = () => {
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
    setIsDisabledSave(hasErrors);
  }

  const onFinish = () => {
    const values = getFormFieldValues(form, schema)
    form.resetFields();
    onSubmit(values);
  };

  return (
    <Form form={form} onFieldsChange={handleFormChange} onFinish={onFinish}>
      {schema.map(generateFormItem)}
      <Form.Item>
        <Button disabled={isDisabledSave} type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>)
}

export default SchemaForm;