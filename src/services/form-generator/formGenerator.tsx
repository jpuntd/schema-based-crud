import dayjs from 'dayjs'
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
      return <FormItemText key={formField.name} {...formField} />
    case 'textarea':
      return <FormItemTextarea key={formField.name} {...formField} />
    case 'select':
      return <FormItemSelect key={formField.name} {...formField} />
    case 'range_picker':
      return <FormItemRangePicker key={formField.name.join('|')} {...formField} />
    default:
  }
}

export const getFormFieldValues = (form: any, formFields: FormField[]) => {
  return formFields.reduce((prev: any, formField: FormField) => {
    switch (formField.component) {
      case 'text':
      case 'textarea':
      case 'select':
        return { ...prev, [formField.name]: form.getFieldValue(formField.name) }
      case 'range_picker':
        const [beginDateName, endDateName] = formField.name
        const dateValues = form.getFieldValue(formField.name.join('|'))
        if (!dateValues || dateValues.length !== 2) {
          return prev;
        }
        const [beginDateValue, endDateValue] = dateValues;

        return {
          ...prev,
          [beginDateName]: dayjs(beginDateValue).format('YYYY-MM-DD'),
          [endDateName]: dayjs(endDateValue).format('YYYY-MM-DD')
        }
      default:
        assertExhaustive(formField)
    }
  }, {});
}
