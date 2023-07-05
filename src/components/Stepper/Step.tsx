import React from 'react';
import styles from './Step.module.scss';
import classNames from 'classnames';

type Props = {
  icon: React.ReactNode;
  title: string;
  activeColor?: string;
  inactiveColor?: string;
  active?: boolean;
  labelActive?: boolean;
  isFirst: boolean;
  isLast: boolean;
};

export default function Step({ icon, title, activeColor, inactiveColor, active, labelActive, isLast, isFirst }: Props) {
  const cxIcon = classNames(styles.icon, active ? styles.activeIcon : '');
  const cxTitle = classNames(styles.title, isFirst ? styles.left : '', isLast ? styles.right : '', !isFirst && !isLast ? styles.center : '');
  return (
    <div className={styles.container}>
      <span style={{ backgroundColor: active ? activeColor : inactiveColor }} className={cxIcon}>
        {icon}
      </span>
      {labelActive && (
        <span style={{ color: activeColor }} className={cxTitle}>
          {title}
        </span>
      )}
    </div>
  );
}
