import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function CircleGalleryIcon({ width = 40, height = 40, color = '#0647D4' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={width} height={height} rx="20" fill={color} />
      <path
        d="M17.6 28H22.4C26.4 28 28 26.4 28 22.4V17.6C28 13.6 26.4 12 22.4 12H17.6C13.6 12 12 13.6 12 17.6V22.4C12 26.4 13.6 28 17.6 28Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6 18.4002C18.4837 18.4002 19.2 17.6839 19.2 16.8002C19.2 15.9165 18.4837 15.2002 17.6 15.2002C16.7163 15.2002 16 15.9165 16 16.8002C16 17.6839 16.7163 18.4002 17.6 18.4002Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5352 25.56L16.4792 22.912C17.1112 22.488 18.0232 22.536 18.5911 23.024L18.8551 23.256C19.4791 23.792 20.4871 23.792 21.1111 23.256L24.4391 20.4C25.0631 19.864 26.0711 19.864 26.6951 20.4L27.9991 21.52"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
