import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function FilterIcon({ width = 16, height = 18, color = '#18181C' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.62791 1H13.3721C14.2674 1 15 1.72738 15 2.61641V4.39446C15 5.04102 14.593 5.84923 14.186 6.25333L10.686 9.32452C10.1977 9.72862 9.87209 10.5368 9.87209 11.1834V14.6587C9.87209 15.1436 9.54651 15.7902 9.13953 16.0326L7.99999 16.76C6.94185 17.4066 5.47675 16.6792 5.47675 15.3861V11.1026C5.47675 10.5368 5.15117 9.80944 4.82559 9.40534L1.73256 6.17251C1.32558 5.7684 1 5.04102 1 4.5561V2.69723C1 1.72738 1.73256 1 2.62791 1Z"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
      <path d="M7.12901 1L3.11621 7.38481" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
