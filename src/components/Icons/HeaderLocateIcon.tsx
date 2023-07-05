import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function HeaderLocateIcon({ width = 14, height = 18, color = '#fff' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8.40365C0 14.3315 6.72107 20 7.99947 20C9.27787 20 16 14.3315 16 8.40365C16 3.76294 12.418 0 7.99947 0C3.58091 0 0 3.76294 0 8.40365ZM7.99923 5.55556C9.47155 5.55556 10.6654 6.79916 10.6654 8.33387C10.6654 9.86754 9.47155 11.1111 7.99923 11.1111C6.52584 11.1111 5.33203 9.86754 5.33203 8.33387C5.33203 6.79916 6.52584 5.55556 7.99923 5.55556Z"
        fill={color}
      />
    </svg>
  );
}
