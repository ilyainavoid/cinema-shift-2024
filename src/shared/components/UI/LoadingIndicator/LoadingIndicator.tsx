import styles from './LoadingIndicator.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingProgress} />
    </div>
  );
};

export default Loading;
