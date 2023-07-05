import React from 'react';
import styles from './NProgress.module.scss';
import { useDeviceDetect } from '@/hooks';
import classNames from 'classnames';
import Spinner from '../Spinner/Spinner';

type Props = {
  open: boolean;
};

export default function NProgress({ open }: Props) {
  const { ScreenNotReady } = useDeviceDetect();
  const cx = classNames(styles.container, ScreenNotReady() || open ? styles.appear : styles.disappear);
  return (
    <div className={cx}>
      <div className={styles.innerContainer}>
        <Spinner width={60} height={60} />
      </div>
    </div>
  );
}
