import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function DocumentIcon({ width = 18, height = 20, color = '#D62631' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.132 0C13.132 0 4.83996 0.00434541 4.827 0.00434541C1.8459 0.0228136 0 1.99566 0 5.00489V14.9951C0 18.0196 1.85994 20 4.86696 20C4.86696 20 13.1579 19.9967 13.1719 19.9967C16.153 19.9783 18 18.0043 18 14.9951V5.00489C18 1.98045 16.139 0 13.132 0Z"
        fill={color}
      />
      <path d="M12.9239 14.6367H5.12549" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.9239 10.0889H5.12549" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.10119 5.55176H5.12549" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
