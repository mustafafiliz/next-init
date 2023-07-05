import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function PlaqueIcon({ width = 20, height = 22, color = '#18c181c' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path
          d="M19.0002 7.58003V14.42C19.0002 15.54 18.4058 16.58 17.4449 17.15L11.5604 20.58C10.5995 21.14 9.41073 21.14 8.4399 20.58L2.5555 17.15C1.59457 16.59 1.00018 15.55 1.00018 14.42V7.58003C1.00018 6.46003 1.59457 5.41999 2.5555 4.84999L8.4399 1.42C9.40083 0.86 10.5896 0.86 11.5604 1.42L17.4449 4.84999C18.4058 5.41999 19.0002 6.45003 19.0002 7.58003Z"
          stroke={color}
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.0076 9.99985C11.2824 9.99985 12.3158 8.95662 12.3158 7.66979C12.3158 6.38297 11.2824 5.33984 10.0076 5.33984C8.7328 5.33984 7.6994 6.38297 7.6994 7.66979C7.6994 8.95662 8.7328 9.99985 10.0076 9.99985Z"
          stroke={color}
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.9683 15.6604C13.9683 13.8604 12.1951 12.4004 10.0057 12.4004C7.81641 12.4004 6.04315 13.8604 6.04315 15.6604"
          stroke={color}
          strokeLinecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}
