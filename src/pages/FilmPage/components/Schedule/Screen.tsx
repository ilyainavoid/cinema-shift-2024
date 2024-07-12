import type { FC } from 'react';
import Text from '@ui/Text/Text.tsx';

import styles from '@/pages/FilmPage/components/Schedule/ScheduleAndPlaces.module.scss';

const Screen: FC = () => {
  return (
    <div className={styles.screenContainer}>
      <Text format='text-regular'>Экран</Text>
      <div className={styles.screen} />
    </div>
  );
};

export default Screen;
