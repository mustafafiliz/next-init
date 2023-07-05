import Link from 'next/link';
import React from 'react';
import styles from './AppLink.module.scss';
import classNames from 'classnames';

type Props = {
  href: string;
  className?: string;
  children?: React.ReactNode;
  locale?: string | false;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: React.HTMLAttributeAnchorTarget;
  type?: 'link' | 'button';
  color?: string;
  bg?: string;
  ariaLabel?: string;
};

export default function AppLink({ ariaLabel, type = 'link', color, bg, onClick, href, className = '', locale, children, target }: Props) {
  const cx = classNames(styles.container, type === 'button' ? styles.btn : '', className || '');

  return (
    <Link aria-label={ariaLabel} style={{ backgroundColor: bg, color: color }} className={cx} onClick={onClick} href={href} locale={locale} target={target}>
      {children}
    </Link>
  );
}
