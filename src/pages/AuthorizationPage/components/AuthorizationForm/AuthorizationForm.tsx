import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCreateOtpCodeMutation } from '@api/hooks/mutations/useCreateOtpCodeMutation.ts';
import { useSignInMutation } from '@api/hooks/mutations/useSignInMutation.ts';
import { setAuthorization, setUser } from '@redux/user/userSlice.ts';
import { ROUTES } from '@shared/consts/routes.ts';
import useTimer from '@shared/utils/hooks/useTimer.ts';
import Button from '@ui/Button/Button.tsx';
import Text from '@ui/Text/Text.tsx';

import styles from './AuthorizationForm.module.scss';

type Inputs = {
  phoneNumber: string;
  otpCode: number;
};

const INPUT_NUMBER = 'Введите номер телефона для входа в личный кабинет';
const INPUT_OTP = 'Введите проверочный код для входа в личный кабинет';
let resendTime = 120000;

const AuthorizationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { time, resetTimer } = useTimer(resendTime);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<Inputs>();
  const [phoneSubmitted, setPhoneSubmitted] = useState(false);
  const mutateCreateOtp = useCreateOtpCodeMutation();
  const mutateSignIn = useSignInMutation();

  const onResend = () => {
    mutateCreateOtp.mutate(
      {
        params: { phone: getValues('phoneNumber') }
      },
      {
        onSuccess: (data) => {
          resendTime = data.data.retryDelay;
          resetTimer(resendTime);
        }
      }
    );
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!phoneSubmitted) {
      mutateCreateOtp.mutate(
        {
          params: { phone: data.phoneNumber }
        },
        {
          onSuccess: (data) => {
            resendTime = data.data.retryDelay;
            resetTimer(resendTime);
          }
        }
      );
      setPhoneSubmitted(true);
    } else {
      mutateSignIn.mutate(
        { params: { phone: data.phoneNumber, code: data.otpCode } },
        {
          onSuccess: (data) => {
            dispatch(setUser(data.data.user));
            dispatch(setAuthorization(true));
            navigate(ROUTES.HOME);
            localStorage.setItem('token', JSON.stringify(data));
          }
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text className={styles.instruction} format='text-regular'>
        {phoneSubmitted ? INPUT_OTP : INPUT_NUMBER}
      </Text>
      <div className={styles.formItem}>
        <input
          placeholder='Телефон'
          className={styles.defaultInput}
          {...register('phoneNumber', { required: true })}
        />
      </div>
      {phoneSubmitted && (
        <div className={styles.formItem}>
          <input
            placeholder='Проверочный код'
            className={styles.defaultInput}
            {...register('otpCode', { required: true })}
          />
          {errors.otpCode && <span>This field is required</span>}
        </div>
      )}
      <div className={styles.formItem}>
        <Button className={styles.submitButton} type='submit' appearance='primary'>
          Продолжить
        </Button>
      </div>
      {phoneSubmitted && (
        <div className={styles.formItem}>
          {time === 0 ? (
            <Button appearance='text' className={styles.resendButton} onClick={() => onResend()}>
              <Text format='text-regular' className={styles.resend}>
                Отправить еще раз
              </Text>
            </Button>
          ) : (
            <Text format='text-regular' className='translucent'>
              Отправить код повторно через {time} сек
            </Text>
          )}
        </div>
      )}
    </form>
  );
};

export default AuthorizationForm;
