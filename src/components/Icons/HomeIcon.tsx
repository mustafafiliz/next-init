import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function HomeIcon({ width = 21, height = 22, color = '#D62631' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.65722 19.7714V16.7047C7.6572 15.9247 8.29312 15.2908 9.081 15.2856H11.9671C12.7587 15.2856 13.4005 15.921 13.4005 16.7047V19.7809C13.4003 20.4432 13.9343 20.9845 14.603 21H16.5271C18.4451 21 20 19.4607 20 17.5619V8.83784C19.9898 8.09083 19.6355 7.38935 19.038 6.93303L12.4577 1.6853C11.3049 0.771567 9.6662 0.771567 8.5134 1.6853L1.96203 6.94256C1.36226 7.39702 1.00739 8.09967 1 8.84736V17.5619C1 19.4607 2.55488 21 4.47291 21H6.39696C7.08235 21 7.63797 20.45 7.63797 19.7714"
        fill={color}
      />
      <path
        d="M7.65722 19.7714V16.7047C7.6572 15.9247 8.29312 15.2908 9.081 15.2856H11.9671C12.7587 15.2856 13.4005 15.921 13.4005 16.7047V19.7809C13.4003 20.4432 13.9343 20.9845 14.603 21H16.5271C18.4451 21 20 19.4607 20 17.5619V8.83784C19.9898 8.09083 19.6355 7.38935 19.038 6.93303L12.4577 1.6853C11.3049 0.771567 9.6662 0.771567 8.5134 1.6853L1.96203 6.94256C1.36226 7.39702 1.00739 8.09967 1 8.84736V17.5619C1 19.4607 2.55488 21 4.47291 21H6.39696C7.08235 21 7.63797 20.45 7.63797 19.7714"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
