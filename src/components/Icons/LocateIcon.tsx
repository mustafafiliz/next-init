import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function LocateIcon({ width = 19, height = 22, color = '#18181C', opacity = 0.6 }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity={opacity}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3327 9.33386C12.3327 7.79914 11.0643 6.55554 9.49992 6.55554C7.93444 6.55554 6.66602 7.79914 6.66602 9.33386C6.66602 10.8675 7.93444 12.1111 9.49992 12.1111C11.0643 12.1111 12.3327 10.8675 12.3327 9.33386Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.49943 21C8.14113 21 1 15.3315 1 9.40365C1 4.76294 4.80471 1 9.49943 1C14.1942 1 18 4.76294 18 9.40365C18 15.3315 10.8577 21 9.49943 21Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
