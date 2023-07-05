import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function CircleEyeIcon({ width = 40, height = 40, color = '#5FA777' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={width} height={height} rx="20" fill={color} />
      <path
        d="M22.928 20.0039C22.928 21.6789 21.6199 23.0323 20.0011 23.0323C18.3823 23.0323 17.0742 21.6789 17.0742 20.0039C17.0742 18.329 18.3823 16.9756 20.0011 16.9756C21.6199 16.9756 22.928 18.329 22.928 20.0039Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 27C22.8861 27 25.5759 25.2405 27.4481 22.1952C28.184 21.0024 28.184 18.9976 27.4481 17.8048C25.5759 14.7595 22.8861 13 20 13C17.1139 13 14.4241 14.7595 12.5519 17.8048C11.816 18.9976 11.816 21.0024 12.5519 22.1952C14.4241 25.2405 17.1139 27 20 27Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
