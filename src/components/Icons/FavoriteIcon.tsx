import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function FavoriteIcon({ width = 20, height = 18, color = '#D62631', fillColor = 'none' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 18" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.558 16.9191C10.252 17.027 9.748 17.027 9.442 16.9191C6.832 16.0292 1 12.3169 1 6.02471C1 3.24719 3.241 1 6.004 1C7.642 1 9.091 1.79101 10 3.01348C10.909 1.79101 12.367 1 13.996 1C16.759 1 19 3.24719 19 6.02471C19 12.3169 13.168 16.0292 10.558 16.9191Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
