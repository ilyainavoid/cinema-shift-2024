import type { FC } from 'react';

import styles from './Skeleton.module.scss';

interface SkeletonProps {
  elementType: 'image' | 'text';
}

const SkeletonComponent: FC<SkeletonProps> = ({ elementType }) => {
  return <div className={styles[elementType]} />;
};

const SkeletonFilmcard: FC = () => {
  return <SkeletonComponent elementType='image' />;
};

type SkeletonType = FC<SkeletonProps> & {
  Image: FC;
};

const Skeleton = SkeletonComponent as SkeletonType;

Skeleton.Image = SkeletonFilmcard;

export default Skeleton;
