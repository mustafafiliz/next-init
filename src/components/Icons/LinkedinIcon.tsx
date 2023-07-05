import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function LinkedinIcon({ width = 20, height = 20, color = '#18181C' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 16.33C20 16.69 19.9199 17.06 19.7496 17.42C19.5794 17.78 19.359 18.12 19.0686 18.44C18.5779 18.98 18.0371 19.37 17.4261 19.62C16.8252 19.87 16.1743 20 15.4732 20C14.4517 20 13.36 19.76 12.2083 19.27C11.0566 18.78 9.90486 18.12 8.76314 17.29C7.61142 16.45 6.51978 15.52 5.47822 14.49C4.44667 13.45 3.51527 12.36 2.68403 11.22C1.86279 10.08 1.2018 8.94 0.721082 7.81C0.240361 6.67 0 5.58 0 4.54C0 3.86 0.12018 3.21 0.360541 2.61C0.600901 2 0.981472 1.44 1.51227 0.94C2.15323 0.31 2.85428 0 3.59539 0C3.87581 0 4.15623 0.0600001 4.40661 0.18C4.667 0.3 4.89735 0.48 5.07762 0.74L7.4011 4.01C7.58137 4.26 7.71157 4.49 7.8017 4.71C7.89184 4.92 7.94191 5.13 7.94191 5.32C7.94191 5.56 7.87181 5.8 7.7316 6.03C7.6014 6.26 7.41112 6.5 7.17076 6.74L6.40961 7.53C6.29945 7.64 6.24937 7.77 6.24937 7.93C6.24937 8.01 6.25939 8.08 6.27942 8.16C6.30946 8.24 6.33951 8.3 6.35954 8.36C6.53981 8.69 6.85028 9.12 7.29094 9.64C7.74161 10.16 8.22233 10.69 8.74311 11.22C9.28393 11.75 9.80471 12.24 10.3355 12.69C10.8563 13.13 11.2869 13.43 11.6274 13.61C11.6775 13.63 11.7376 13.66 11.8077 13.69C11.8878 13.72 11.968 13.73 12.0581 13.73C12.2283 13.73 12.3585 13.67 12.4687 13.56L13.2298 12.81C13.4802 12.56 13.7206 12.37 13.9509 12.25C14.1813 12.11 14.4116 12.04 14.662 12.04C14.8523 12.04 15.0526 12.08 15.2729 12.17C15.4932 12.26 15.7236 12.39 15.974 12.56L19.2889 14.91C19.5493 15.09 19.7296 15.3 19.8398 15.55C19.9399 15.8 20 16.05 20 16.33Z"
        fill={color}
      />
    </svg>
  );
}
