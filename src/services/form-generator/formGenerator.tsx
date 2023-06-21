import FormItemSelect, { FormFieldSelect } from './formItems/FormItemSelect';
import FormItemRangePicker, { FormFieldRangePicker } from './formItems/FormItemRangePicker';
import FormItemText, { FormFieldText } from './formItems/FormItemText';
import FormItemTextarea, { FormFieldTextarea } from './formItems/FormItemTextarea';

export type FormField =
  FormFieldText
  | FormFieldTextarea
  | FormFieldSelect
  | FormFieldRangePicker

const assertExhaustive = (_value: never): never => {
  throw new Error('Reached unexpected case in exhaustive switch');
}

export const generateFormItem = (formField: FormField) => {
  switch (formField.component) {
    case 'text':
      return <FormItemText {...formField} />
    case 'textarea':
      return <FormItemTextarea {...formField} />
    case 'select':
      return <FormItemSelect {...formField} />
    case 'range_picker':
      return <FormItemRangePicker {...formField} />
    default:
      assertExhaustive(formField)
  }
}
