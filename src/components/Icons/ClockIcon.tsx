import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function ClockIcon({ width = 20, height = 20, color = '#D62631' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0001 9.99999C20.0001 15.5232 15.5233 20 10 20C4.47676 20 0 15.5232 0 9.99999C0 4.47676 4.47676 0 10 0C15.5233 0 20.0001 4.47676 20.0001 9.99999Z"
        fill={color}
      />
      <path d="M13.71 13.1811L9.63428 10.7497V5.50977" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
