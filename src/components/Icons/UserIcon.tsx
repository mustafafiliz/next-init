import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function UserIcon({ width = 18, height = 22, color = '#18181c', opacity = 0.6, fillColor = 'none' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 22" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
      <g opacity={opacity}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.00054 14.6169C4.68521 14.6169 1 15.2524 1 17.7971C1 20.3418 4.66183 21 9.00054 21C13.3159 21 17 20.3635 17 17.8198C17 15.2762 13.3393 14.6169 9.00054 14.6169Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.00137 10.9874C11.8333 10.9874 14.1285 8.75108 14.1285 5.99318C14.1285 3.23529 11.8333 1 9.00137 1C6.16942 1 3.87308 3.23529 3.87308 5.99318C3.86351 8.74177 6.14392 10.9781 8.96522 10.9874H9.00137Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
