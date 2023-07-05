import { colors } from '@/lib/colors';
import React from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

type Props = {
  text?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  marginTop?: string;
};

export default function ErrorLabel({ text, marginTop = '0.8' }: Props) {
  return text ? <div style={{ color: colors.secondary, fontSize: '1.4rem', marginTop: `${marginTop}rem` }}>{text.toString()}</div> : <></>;
}
