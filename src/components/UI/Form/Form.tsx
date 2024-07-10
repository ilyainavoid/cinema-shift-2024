import type { ComponentProps } from 'react';
import React from 'react';
import type { FieldError, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import Button from '@ui/Button/Button.tsx';
import Text from '@ui/Text/Text.tsx';

import type { Field } from '@/interfaces/formField.ts';

import styles from './Form.module.scss';

interface FormProps extends ComponentProps<'form'> {
  fields: Field[];
  onSubmit: SubmitHandler<any>;
  buttonText: string;
  use: 'otp-request' | 'checkout' | 'profile' | 'otp-submit';
}

const Form: React.FC<FormProps> = ({ fields, onSubmit, use, buttonText, ...formProps }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...formProps} className={styles.form}>
      {fields.map((field, index) => (
        <div key={index}>
          <div className={styles.formItem}>
            <input
              id={field.name}
              type={field.type}
              {...register(field.name, field.validation)}
              placeholder={field.label}
              className={errors[field.name] ? styles.errorInput : styles.defaultInput}
              disabled={field.disabled}
            />
            {errors[field.name] && (
              <span className={styles.error}>{(errors[field.name] as FieldError)?.message}</span>
            )}
          </div>
        </div>
      ))}
      <Button appearance='Primary' type='submit' className={styles.submitButton}>
        {buttonText}
      </Button>
      {use === 'otp-submit' && (
        <Text format='text-regular'>Отправить код повторно через X сек</Text>
      )}
    </form>
  );
};

export default Form;
