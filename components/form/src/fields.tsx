import type { ComponentType, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, } from 'react';
import type { FieldProps } from '@catalyse/forms';

import { date, integer, minimum, range, withForm } from '@catalyse/forms';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const _Input: FC<InputProps> = ({
  ...props
}) => (
  <input {...props} />
);

const _TextInput: FC<InputProps> = ({
  ...props
}) => (
  <input type="text" {...props} />
);

const _DateInput: FC<InputProps> = ({
  ...props
}) => (
  <input type="date" {...props} />
);

const _Select: FC<InputProps> = ({
  options,
  ...props
}) => (
  <select {...props}>
  { options.map(({ label, selected, ...attrs }, i) => (
    <option
      {...attrs}
      key={i}
    >
      {label}
    </option>
  )
  ) }
  </select>
);

const _Textarea: FC<InputProps> = ({
  ...props
}) => (
  <textarea {...props} />
);

_Input.displayName = 'Input';
_TextInput.displayName = 'TextInput';
_DateInput.displayName = 'DateInput';
_Select.displayName = 'Select';
_Textarea.displayName = 'Textarea';

export const Input: ComponentType<InputProps & FieldProps> = withForm(_Input as any);
export const TextInput: ComponentType<InputProps & FieldProps> = withForm(_TextInput as any);
export const DateInput: ComponentType<InputProps & FieldProps> = withForm(_DateInput as any);
export const Select: ComponentType<SelectProps & FieldProps> = withForm(_Select as any);
export const Textarea: ComponentType<TextareaProps & FieldProps> = withForm(_Textarea as any);

export {
  Select as Checkboxes,
  Select as Radios
};
