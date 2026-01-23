import type { ButtonHTMLAttributes, ComponentProps, ComponentType, FC } from 'react';
import type { ControlProps } from '@catalyse/forms';

import { withControl } from '@catalyse/forms';

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton: FC<SubmitButtonProps> = ({
  children,
  ...props
}) => (
  <button
    {...props}
    type="submit"
  >
    {children}
  </button>
);

SubmitButton.displayName = 'Submit';

export const Submit: ComponentType<SubmitButtonProps & ControlProps> = withControl(SubmitButton);
