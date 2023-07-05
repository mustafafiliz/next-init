import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function MailIcon({ width = 24, height = 20, color = '#18181C', opacity = 0.7 }: IIcon) {
  return (
    <svg opacity={opacity} width={width} height={height} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 21H7C3.4 21 1 19.2353 1 15.1176V6.88235C1 2.76471 3.4 1 7 1H19C22.6 1 25 2.76471 25 6.88235V15.1176C25 19.2353 22.6 21 19 21Z"
        stroke={color}
        strokeWidth="1"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 7.4707L15.244 10.4119C14.008 11.3766 11.98 11.3766 10.744 10.4119L7 7.4707"
        stroke={color}
        strokeWidth="1"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
