import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function ChevronUpIcon({ width = 18, height = 10, color = '#000' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.6"
        d="M17 9.00439L11.5 3.73434L8.58587 1.00439L1 9.00439"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
