import type { FC } from 'react';
import Rating from 'react-rating';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Fractionalrating.module.scss';

interface FractionalRatingProps {
  rating: number;
}

const FractionalRating: FC<FractionalRatingProps> = ({ rating }) => {
  return (
    <Rating
      className={styles.rating}
      initialRating={Math.round(rating * 10) / 20}
      fractions={10}
      readonly
      start={0}
      stop={5}
      emptySymbol={<FontAwesomeIcon icon={fasStar} className={styles.starEmpty} />}
      fullSymbol={<FontAwesomeIcon icon={fasStar} className={styles.starFull} />}
    />
  );
};

export default FractionalRating;
