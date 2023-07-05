import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function RedLocateIcon({ width = 17, height = 20, color = '#D62631' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.239301 6.49C2.18126 -2.17 14.8286 -2.16 16.7607 6.5C17.8944 11.58 14.7793 15.88 12.0488 18.54C10.0674 20.48 6.93264 20.48 4.9414 18.54C2.22069 15.88 -0.89433 11.57 0.239301 6.49Z"
        fill={color}
      />
      <path
        d="M8.50039 11.4299C10.199 11.4299 11.576 10.0331 11.576 8.3099C11.576 6.58681 10.199 5.18994 8.50039 5.18994C6.80182 5.18994 5.4248 6.58681 5.4248 8.3099C5.4248 10.0331 6.80182 11.4299 8.50039 11.4299Z"
        fill="white"
      />
    </svg>
  );
}
