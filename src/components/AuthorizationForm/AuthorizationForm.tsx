import { useEffect, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import Form from '@ui/Form/Form.tsx';
import Text from '@ui/Text/Text.tsx';

import { requestOtpFormFields, submitOtpFormFields } from '@/consts/forms.ts';

import styles from './AuthorizationForm.module.scss';

const AuthorizationForm = () => {
  const [numberSubmitted, setNumberSubmitted] = useState<boolean>(false);
  const [instruction, setInstruction] = useState<string>(
    'Введите номер телефона для входа в личный кабинет'
  );
  // @ts-ignore
  const [phoneNumber, setPhoneNumber] = useState<string>();

  const requestFormFields = requestOtpFormFields;
  const submitFormFields = submitOtpFormFields;

  useEffect(() => {
    if (numberSubmitted) {
      setInstruction('Введите проверочный код для входа в личный кабнет');
    }
  }, [numberSubmitted]);

  const onRequest: SubmitHandler<any> = (data) => {
    setNumberSubmitted(true);
    setPhoneNumber(data.phoneNumber);
  };

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.formContainer}>
      <Text format='text-regular' className={styles.instruction}>
        {instruction}
      </Text>
      {numberSubmitted ? (
        <Form use='otp-submit' buttonText='Войти' fields={submitFormFields} onSubmit={onSubmit} />
      ) : (
        <Form
          use='otp-request'
          buttonText='Продолжить'
          fields={requestFormFields}
          onSubmit={onRequest}
        />
      )}
    </div>
  );
};

export default AuthorizationForm;
