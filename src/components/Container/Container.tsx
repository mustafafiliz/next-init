import React from 'react';
import styles from './Container.module.scss';
import classNames from 'classnames';

type Props = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  smPaddingZero?: boolean;
  w100?:boolean
};

export default function Container({ children, style, smPaddingZero,w100, className }: Props) { 
  const cx = classNames(className ? className : '', styles.wrapper, smPaddingZero ? styles.smPaddingZero : '',w100 ? styles.w100 : '');
  return (
    <div style={{ ...style }} className={cx}>
      {children}
    </div>
  );
}
