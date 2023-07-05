import { IIcon } from '@/interfaces/Icons/icons.interface';
import { colors } from '@/lib/colors';
import React from 'react';

export default function MarkerIcon({ color = colors.secondary }: IIcon) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -0.63 20.163 24.881">
      <path d="M19.001 10.017c0 5.828-9.936 14.07-9.936 14.07S-.87 15.845-.87 10.017C-.87 4.189 3.578-.536 9.065-.536c5.488 0 9.936 4.725 9.936 10.553Z" fill={color} />
      <ellipse fill="#fff" cx="9.216" cy="9.674" rx="6.208" ry="6.2" />
    </svg>
  );
}
