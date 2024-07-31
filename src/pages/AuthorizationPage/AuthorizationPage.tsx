import Title from '@ui/Title/Title.tsx';

import AuthorizationForm from './components/AuthorizationForm/AuthorizationForm';

import styles from './Authorization.module.scss';

const AuthorizationPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <Title as='h2' format='text-bold' className={styles.authorizationHeading}>
          Авторизация
        </Title>
        <AuthorizationForm />
      </div>
    </div>
  );
};

export default AuthorizationPage;
