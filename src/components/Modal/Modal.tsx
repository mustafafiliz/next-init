import React from 'react';
import { Modal as ReponsiveModal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from './Modal.module.scss';
import CloseIcon from '../Icons/CloseIcon';
import classNames from 'classnames';

type Props = {
  content: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  animationDuration?: number;
  className?: string;
  closeButtonClassName?: string;
  p0?: boolean;
};

export default function Modal({ content, open, onClose, title, p0, animationDuration = 300, className, closeButtonClassName }: Props) {
  const cx = classNames(styles.container, className || '', p0 ? styles.p0 : '');
  const cxCloseIcon = classNames(styles.closeBtn, closeButtonClassName || '');
  return open ? (
    <ReponsiveModal
      blockScroll={false}
      center
      animationDuration={animationDuration}
      classNames={{ modal: cx, closeButton: cxCloseIcon }}
      open={open}
      onClose={onClose}
      closeIcon={<CloseIcon />}
    >
      {title && <h6 className={styles.title}>{title}</h6>}
      {open && content}
    </ReponsiveModal>
  ) : (
    <></>
  );
}
