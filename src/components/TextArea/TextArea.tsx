import classNames from 'classnames';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import styles from './TextArea.module.scss';
import { FocusEvent, useState } from 'react';

type Props = {
  containerClassName?: string;
  inputClassName?: string;
  icon?: React.ReactNode;
  placeholder?: string | null;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  readOnly?: boolean;
};

export default function TextArea({ containerClassName, inputClassName, icon, placeholder = '', value, onChange, onFocus, error, readOnly }: Props) {
  const [focus, setFocus] = useState(false)
  const cx = classNames(styles.container, containerClassName || '', error ? styles.error : '');
  const cxInput = classNames(styles.textareaContainer, inputClassName || '', icon ? styles.hasIcon : '');
  const cxPlaceholder = classNames(styles.placeholder, focus || value?.length > 0 ? styles.focused : '')

  const handleFocus = (e: FocusEvent<HTMLTextAreaElement, Element>) => {
    setFocus(true);
    onFocus && onFocus(e)
  }

  return (
    <label className={cx}>
      {icon && <span className={styles.iconContainer}>{icon}</span>}
      <span className={cxPlaceholder}>{placeholder}</span>
      <textarea maxLength={225} rows={6} readOnly={readOnly} className={cxInput} onChange={onChange} onFocus={handleFocus} onBlur={() => setFocus(false)} value={value || ''} />
    </label>
  );
}
