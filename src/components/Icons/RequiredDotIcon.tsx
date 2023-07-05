import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function RequiredDotIcon({ width = 6, height = 6, color = '#D62631' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={width} height={height} rx="3" fill={color} />
    </svg>
  );
}
