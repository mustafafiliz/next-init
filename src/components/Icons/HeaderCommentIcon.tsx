import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function HeaderCommentIcon({ width = 18, height = 18, color = '#fff' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.391496 9.55456C-0.738148 5.83203 0.582051 1.57717 4.28472 0.318166C6.23238 -0.345231 8.38221 0.0459177 10.0014 1.3316C11.5332 0.0814766 13.762 -0.340786 15.7075 0.318166C19.4102 1.57717 20.7388 5.83203 19.6102 9.55456C17.8521 15.4551 10.0014 20 10.0014 20C10.0014 20 2.20861 15.524 0.391496 9.55456Z"
        fill="white"
      />
    </svg>
  );
}
