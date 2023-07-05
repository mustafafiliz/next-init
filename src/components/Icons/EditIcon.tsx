import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

type Props = {};

export default function EditIcon({ width = 22, height = 22, color = '#18181C' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path
          d="M8.42579 1.03271H5.24976C2.63773 1.03271 1 2.87855 1 5.49173V12.541C1 15.1542 2.63008 17 5.24976 17H12.7452C15.3657 17 16.9958 15.1542 16.9958 12.541V9.12573"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.16221 7.92758L12.5101 1.5914C13.3009 0.802867 14.5827 0.802867 15.3735 1.5914L16.4073 2.62327C17.1981 3.41265 17.1981 4.69295 16.4073 5.48148L10.0289 11.8482C9.68313 12.1933 9.21424 12.3874 8.72496 12.3874H5.54297L5.62282 9.18244C5.63471 8.71102 5.82753 8.26164 6.16221 7.92758Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11.5449 2.57037L15.4235 6.4418" stroke={color} strokeLinecap="round" stroke-linejoin="round" />
      </g>
    </svg>
  );
}
