import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function SearchIcon({ width = 22, height = 22, color = '#18181c' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.5 20C15.7467 20 20 15.7467 20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 21L19 19" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
