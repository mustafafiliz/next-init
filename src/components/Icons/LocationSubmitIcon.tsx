import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function LocationSubmitIcon({ width = 22, height = 22, color = 'currentColor' }: IIcon) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" stroke={color} height={height} width={width}>
      <g>
        <path d="M850.5,990c-11.7,0-22.9-3.6-32.3-10.4L499.8,749.1L181.8,979c-18.8,13.6-45.7,13.6-64.6,0c-19.6-14.2-27.2-39.7-18.3-62L448.7,43.7C457,23.2,476.8,10,499.2,10c22.5,0,42.3,13.2,50.5,33.7L901,917.5c7.9,20,3,42.4-12.5,57.3c-1.7,1.6-3.5,3.1-5.4,4.6C873.4,986.4,862.2,990,850.5,990z M499.8,688.6L847,939.8c2,1.5,5.1,1.5,7.1,0c1-1,2.1-2.3,1.4-4.1L504.2,62c-1.4-3.5-8.6-3.5-10,0L144.5,935.2c-0.6,1.4,0,2.9,1.5,4c1.8,1.3,4.1,2.2,7,0L499.8,688.6z"></path>
      </g>
    </svg>
  );
}
