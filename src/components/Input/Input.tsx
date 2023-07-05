import React, { FocusEvent, useState } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import SearchIcon from '../Icons/SearchIcon';

type Props = {
  containerClassName?: string;
  inputClassName?: string;
  icon?: React.ReactNode;
  placeholder?: string | null;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  readOnly?: boolean;
  min?: string | number;
  max?: string | number;
  isSearchable?: boolean;
};

export default function Input({
  containerClassName,
  inputClassName,
  icon,
  placeholder = '',
  value,
  onChange,
  onFocus,
  onBlur,
  type = 'text',
  min,
  max,
  error,
  readOnly,
  isSearchable,
}: Props) {
  const [focus, setFocus] = useState(false)
  const cx = classNames(styles.container, containerClassName || '', error ? styles.error : '');
  const cxInput = classNames(styles.inputContainer, inputClassName || '', !icon ? styles.pl0 : '');
  const cxPlaceholder = classNames(styles.placeholder, focus || value?.length > 0 ? styles.focused : '',)

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    setFocus(true);
    onFocus && onFocus(e);
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    setFocus(false)
    onBlur && onBlur(e);
  }

  return (
    <label className={cx}>
      {!isSearchable && icon && <span className={styles.iconContainer}>{icon}</span>}
      <span className={cxPlaceholder}>
        {placeholder}
      </span>
      <input
        readOnly={readOnly}
        className={cxInput}
        type={type}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value || ''}
        min={min}
        max={max}
      />
      {isSearchable && <SearchIcon />}
    </label>
  );
}
