import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function BusinessBagIcon({ width = 22, height = 22, color = '#18181C' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path
          d="M6.89797 21H15.1024C19.2251 21 19.9635 19.39 20.1789 17.43L20.9481 9.43C21.225 6.99 20.5071 5 16.128 5H5.87241C1.49328 5 0.775384 6.99 1.05228 9.43L1.82145 17.43C2.03682 19.39 2.77522 21 6.89797 21Z"
          stroke={color}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.89862 5V4.2C6.89862 2.43 6.89862 1 10.1804 1H11.8213C15.1031 1 15.1031 2.43 15.1031 4.2V5"
          stroke={color}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.0516 12V13C13.0516 13.01 13.0516 13.01 13.0516 13.02C13.0516 14.11 13.0414 15 11.0005 15C8.96991 15 8.9494 14.12 8.9494 13.03V12C8.9494 11 8.9494 11 9.97496 11H12.0261C13.0516 11 13.0516 11 13.0516 12Z"
          stroke={color}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M20.8965 10C18.5275 11.68 15.82 12.68 13.051 13.02" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.37909 10.2695C3.6866 11.8095 6.29152 12.7395 8.94772 13.0295" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
