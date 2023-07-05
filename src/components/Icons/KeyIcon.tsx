import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function KeyIcon({ width = 22, height = 22, color = '#18181C' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path
          d="M18.7892 13.9251C16.7296 15.9755 13.7801 16.6057 11.1906 15.7955L6.48154 20.4965C6.14161 20.8466 5.47173 21.0566 4.99183 20.9866L2.81224 20.6865C2.09238 20.5865 1.42251 19.9064 1.31253 19.1862L1.01259 17.0058C0.942599 16.5257 1.17255 15.8555 1.50249 15.5155L6.20159 10.8145C5.40175 8.21399 6.02163 5.26338 8.08124 3.21296C11.0307 0.262347 15.8197 0.262347 18.7792 3.21296C21.7386 6.16357 21.7386 10.9745 18.7892 13.9251Z"
          stroke={color}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5.8916 16.4858L8.19208 18.7863" stroke={color} stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M13.5013 9.99427C14.3299 9.99427 15.0016 9.32253 15.0016 8.49396C15.0016 7.66536 14.3299 6.99365 13.5013 6.99365C12.6727 6.99365 12.001 7.66536 12.001 8.49396C12.001 9.32253 12.6727 9.99427 13.5013 9.99427Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
