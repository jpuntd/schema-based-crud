import { Form } from 'antd'
import { generateFormItem, FormField } from '../services/form-generator/formGenerator';

type Props = {
  schema: FormField[]
}

const SchemaForm = ({ schema }: Props) => {

  return <Form>{schema.map(generateFormItem)}</Form>
}

export default SchemaForm;