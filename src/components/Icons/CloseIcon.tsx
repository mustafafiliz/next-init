import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function CloseIcon({ width = 16, height = 16, color = '#18181c', opacity = 0.4 }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity={opacity}>
        <path d="M12.9953 1.00525L1.00781 12.9927" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.9975 13L1 1" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
