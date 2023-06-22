import { Form, Button } from 'antd'
import { generateFormItem, getFormFieldValues, FormField } from '../services/form-generator/formGenerator';

type Props = {
  schema: FormField[];
  onSubmit: (values: Record<string, any>) => void;
}

const SchemaForm = ({ schema, onSubmit }: Props) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    const values = getFormFieldValues(form, schema)
    onSubmit(values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      {schema.map(generateFormItem)}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>)
}

export default SchemaForm;