import type { ComponentProps, ComponentType, FC } from 'react';

import { createElement as h } from 'react';
import WTForm, {
  Fork,
  Page,
  alpha as localAlpha,
  alphanumeric as localAlphanumeric,
  mobileNumber as localMobileNumber,
  postalCode as localPostalCode
} from '@react-foundry/forms';
import { Submit } from './controls';
import {
  Checkboxes,
  DateInput,
  Input,
  Radios,
  Select,
  Textarea,
  TextInput
} from './fields';

import '../assets/Form.scss';

export type FormProps = ComponentProps<typeof WTForm>;
type TForm = ComponentType<FormProps> & {
  Checkboxes: ComponentType<any>
  DateInput: ComponentType<any>
  Fork: ComponentType<any>
  Input: ComponentType<any>
  Page: ComponentType<any>
  Radios: ComponentType<any>
  Select: ComponentType<any>
  Submit: ComponentType<any>
  Textarea: ComponentType<any>
  TextInput: ComponentType<any>
};

export const FormComponent: FC<FormProps> = ({ classBlock, ...props }) => h(WTForm, {
  ...props,
  classBlock: classBlock || 'react-foundry-form'
});

export const Form: TForm = Object.assign(
  FormComponent,
  {
    Checkboxes,
    DateInput,
    Fork,
    Input,
    Page,
    Radios,
    Select,
    Submit,
    Textarea,
    TextInput
  }
);

export default Form;
export {
  after,
  before,
  date,
  email,
  exactLength,
  future,
  integer,
  maximum,
  maxLength,
  maxWords,
  minimum,
  minLength,
  minWords,
  numeric,
  past,
  range,
  required,
  url,
  validator,
  withControl,
  withForm,
  withField
} from '@react-foundry/forms';
export type { RawField } from '@react-foundry/forms';
