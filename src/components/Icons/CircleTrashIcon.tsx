import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function CircleTrashIcon({ width = 40, height = 40, color = '#F9A851' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={width} height={height} rx="20" fill={color} />
      <path
        d="M28 14.5828C25.04 14.2858 22.0622 14.1328 19.0933 14.1328C17.3333 14.1328 15.5733 14.2228 13.8133 14.4028L12 14.5828"
        stroke="white"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.8887 13.673L17.0842 12.494C17.2264 11.639 17.3331 11 18.8353 11H21.1642C22.6665 11 22.782 11.675 22.9153 12.503L23.1109 13.673"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.0899 17.4258L25.5121 26.4889C25.4143 27.902 25.3343 29 22.8543 29H17.1477C14.6677 29 14.5877 27.902 14.4899 26.4889L13.9121 17.4258"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18.5156 24.0498H21.4756" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.7773 20.4502H22.2218" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
