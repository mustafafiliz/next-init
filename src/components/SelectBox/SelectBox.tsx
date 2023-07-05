import React, { FocusEvent, useState } from 'react';
import ReactSelect, { ActionMeta, MultiValue, SingleValue } from 'react-select';
import styles from './SelectBox.module.scss';
import RequiredDotIcon from '../Icons/RequiredDotIcon';
import classNames from 'classnames';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { colors } from '@/lib/colors';

type Props = {
  containerClassName?: string;
  inputClassName?: string;
  multiple?: boolean | undefined;
  options: { value: string | number; label: string | number }[];
  selected: any | undefined;
  defaultValue?: { value: string | number; label: string | number }[];
  closeMenuOnSelect?: boolean | undefined;
  placeholder: string;
  required?: boolean;
  icon?: React.ReactNode;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  onInputChange?: (value: string) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?:
  | ((
    newValue:
      | MultiValue<{
        value: string | number;
        label: string | number;
      }>
      | SingleValue<{
        value: string | number;
        label: string | number;
      }>,
    actionMeta: ActionMeta<{
      value: string | number;
      label: string | number;
    }>,
  ) => void)
  | undefined;
};

const SelectBox = ({
  containerClassName,
  inputClassName,
  icon,
  required,
  placeholder = '',
  multiple,
  defaultValue,
  options = [],
  error,
  closeMenuOnSelect = true,
  selected,
  onInputChange,
  onChange,
  onFocus,
}: Props) => {
  const [focus, setFocus] = useState(false)

  const style = {
    container: (base: any) => ({
      ...base,
      width: '100%',
    }),
    control: (base: any, state: any) => ({
      ...base,
      padding: icon ? '0.9rem 2.9rem 0.9rem 5rem' : '0.9rem 2.9rem',
      boxShadow: 'none',
      border: error ? `1px solid ${colors.secondary}` : state.isFocus ? '1px solid #18181c33' : '1px solid #18181c33',
      borderRadius: '2.4rem',
      color: state.isSelected ? '#18181c' : '#18181c',
      letterSpacing: '0.1rem',
      fontWeight: 300,
      fontSize: '1.4rem',
      width: '100%',
    }),
    valueContainer: (base: any) => ({
      ...base,
      paddingLeft: '2rem'
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected ? '#A6CEFD' : base.backgroundColor,
      color: state.isSelected ? '#18181c' : '#18181c',
    }),
    clearIndicator: (base: any) => ({
      ...base,
      padding: '8px 0',
    }),
    menu: (base: any) => ({
      ...base,
      border: '1px solid #ddd',
      boxShadow: 'none',
      borderRadius: '0.4rem',
      zIndex: 2,
    }),
    menuList: (base: any) => ({
      ...base,
      fontSize: '15px',
      padding: '0',
    }),
    indicatorsContainer: (base: any) => ({
      ...base,
      display: 'flex',
      alignItems: 'items-start',
      justifyContent: 'flex-start',
    }),
    placeholder: (base: any) => ({
      ...base,
      fontSize: '1.4rem',
      color: error ? colors.secondary : base.color,
    }),
  };

  const noOptionsMessage = () => {
    return <span className="text-sm">Seçenek yok</span>;
  };

  const customFilter = (option: any, query: any) => {
    const label = String(option.data.label).toLocaleLowerCase('tr');
    if (label.startsWith(query.toLocaleLowerCase('tr')) && label.includes(query.toLocaleLowerCase('tr'))) return true;
    else return false;
  };

  const cx = classNames(styles.container, error ? styles.error : '', containerClassName || '');
  const cxPlaceholder = classNames(styles.placeholder, focus || selected?.length > 0 || Object.keys(selected || {})?.length > 0 ? styles.focused : '')

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    setFocus(true)
    onFocus && onFocus(e)
  }

  return (
    <div className={cx}>
      {required && (
        <span className={styles.requiredContainer}>
          <RequiredDotIcon />
        </span>
      )}
      <span className={cxPlaceholder}>{placeholder}</span>
      {icon && <span className={styles.iconContainer}>{icon}</span>}
      <ReactSelect
        value={selected ? selected : ''}
        styles={style}
        onInputChange={(value) => {
          if (onInputChange) onInputChange(value);
          return value;
        }}
        closeMenuOnSelect={closeMenuOnSelect}
        defaultValue={defaultValue}
        components={{ IndicatorSeparator: () => null }}
        noOptionsMessage={noOptionsMessage}
        isMulti={multiple}
        options={options}
        placeholder=''
        filterOption={customFilter}
        onFocus={handleFocus}
        onBlur={() => setFocus(false)}
        onChange={onChange}
        className={inputClassName || ''}
      />
    </div>
  );
};

export default SelectBox;
