import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function EntryIcon({ width = 22, height = 22, color = '#fff' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.3231 9.521C12.8318 3.47059 15.8677 1 22.5139 1H22.7272C30.0626 1 33 4.0084 33 11.521V22.479C33 29.9916 30.0626 33 22.7272 33H22.5139C15.9169 33 12.8811 30.563 12.3395 24.6135"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1 16.9832H22.1364" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.4769 11.3529L23.9744 16.9832L18.4769 22.6134" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
