import { PHONE_REGEX } from '@/consts/regularExpressions.ts';
import { REQUIRED_ERROR_MESSAGE, WRONG_PHONE_FORMAT } from '@/consts/strings.ts';
import type { Field } from '@/interfaces/formField.ts';

export const requestOtpFormFields: Field[] = [
  {
    name: 'phoneNumber',
    label: 'Телефон',
    type: 'tel',
    validation: {
      required: REQUIRED_ERROR_MESSAGE,
      pattern: {
        value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
        message: WRONG_PHONE_FORMAT
      }
    }
  }
];

export const submitOtpFormFields: Field[] = [
  {
    name: 'phoneNumber',
    label: 'Телефон',
    type: 'tel',
    disabled: true,
    validation: {
      required: REQUIRED_ERROR_MESSAGE,
      pattern: {
        value: PHONE_REGEX,
        message: WRONG_PHONE_FORMAT
      }
    }
  },
  {
    name: 'otp',
    label: 'Проверочный код',
    type: 'text',
    validation: {
      required: REQUIRED_ERROR_MESSAGE
    }
  }
];
