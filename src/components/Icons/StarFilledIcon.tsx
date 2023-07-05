import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function StarFilledIcon({ width = 18, height = 18, color = '#F9A851' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.3832 2.15534L11.7912 4.9943C11.9832 5.38951 12.4952 5.76856 12.9272 5.84115L15.4792 6.26861C17.1112 6.54283 17.4952 7.73647 16.3192 8.91399L14.3352 10.9142C13.9992 11.2529 13.8152 11.9062 13.9192 12.374L14.4872 14.85C14.9352 16.8098 13.9032 17.568 12.1832 16.5437L9.79117 15.1161C9.35917 14.8581 8.64717 14.8581 8.20717 15.1161L5.81515 16.5437C4.10315 17.568 3.06315 16.8018 3.51115 14.85L4.07915 12.374C4.18315 11.9062 3.99915 11.2529 3.66315 10.9142L1.67915 8.91399C0.511146 7.73647 0.887146 6.54283 2.51915 6.26861L5.07115 5.84115C5.49515 5.76856 6.00715 5.38951 6.19915 4.9943L7.60717 2.15534C8.37517 0.614886 9.62317 0.614886 10.3832 2.15534Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}