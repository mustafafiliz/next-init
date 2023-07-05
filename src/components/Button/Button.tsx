import React, { CSSProperties, MouseEventHandler } from 'react';
import Spinner from '../Spinner/Spinner';
import styles from './Button.module.scss';
import { colors } from '@/lib/colors';
import classNames from 'classnames';

type Props = {
  name?: string | null;
  icon?: React.ReactNode;
  loading?: boolean;
  bg?: string;
  color?: string;
  size?: 'medium' | 'small';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  w100?: boolean;
  disable?: boolean;
  style?: CSSProperties;
  p0?: boolean;
};

export default function Button({
  onClick,
  disable,
  type = 'button',
  className,
  style,
  name,
  icon,
  loading,
  size = 'medium',
  bg = colors.transparent,
  color = colors.black,
  w100,
  p0,
}: Props) {
  const cx = classNames(
    styles.container,
    size === 'medium' ? styles.medium : '',
    className || '',
    size === 'small' ? styles.small : '',
    w100 ? styles.w100 : '',
    p0 ? styles.p0 : '',
  );

  return (
    <button disabled={disable} type={type} onClick={onClick} style={{ backgroundColor: bg, color: color, ...style }} className={cx}>
      {icon} {name && <span color={color}>{name}</span>}
      {loading && <Spinner />}
    </button>
  );
}
