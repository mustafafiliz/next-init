import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function PersonalGroupIcon({ width = 48, height = 48, color = 'white' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M37.3326 13.528C37.1644 13.5045 36.9962 13.5045 36.8279 13.528C33.1027 13.4108 30.1465 10.4332 30.1465 6.77571C30.1465 3.0479 33.2469 0 37.0923 0C40.9137 0 44.0381 3.02445 44.0381 6.77571C44.0141 10.4332 41.0579 13.4108 37.3326 13.528Z"
        fill={color}
      />
      <path
        d="M45.1718 29.7764C42.48 31.5348 38.7067 32.1912 35.2217 31.7458C36.135 29.8233 36.6157 27.6897 36.6397 25.439C36.6397 23.0944 36.111 20.8671 35.1016 18.9212C38.6586 18.4523 42.4319 19.1087 45.1478 20.8671C48.9451 23.3054 48.9451 27.3146 45.1718 29.7764Z"
        fill={color}
      />
      <path
        d="M10.6814 13.528C10.8497 13.5045 11.0179 13.5045 11.1862 13.528C14.9114 13.4108 17.8676 10.4332 17.8676 6.77571C17.8676 3.02445 14.7672 0 10.9218 0C7.10038 0 4 3.02445 4 6.77571C4 10.4332 6.95618 13.4108 10.6814 13.528Z"
        fill={color}
      />
      <path
        d="M10.9475 25.4394C10.9475 27.7136 11.4522 29.8706 12.3655 31.8166C8.97669 32.1682 5.4437 31.4649 2.84803 29.8003C-0.949342 27.3385 -0.949342 23.3293 2.84803 20.8676C5.41966 19.1795 9.04879 18.4996 12.4616 18.8747C11.4762 20.8441 10.9475 23.0714 10.9475 25.4394Z"
        fill={color}
      />
      <path
        d="M24.3341 32.5191C24.1418 32.4956 23.9255 32.4956 23.7092 32.5191C19.2869 32.3784 15.7539 28.8382 15.7539 24.4773C15.7779 20.0227 19.4552 16.4121 24.0457 16.4121C28.6121 16.4121 32.3134 20.0227 32.3134 24.4773C32.2893 28.8382 28.7804 32.3784 24.3341 32.5191Z"
        fill={color}
      />
      <path
        d="M16.5226 37.3737C12.8935 39.7417 12.8935 43.6336 16.5226 45.9782C20.6565 48.6744 27.4341 48.6744 31.568 45.9782C35.1971 43.6102 35.1971 39.7183 31.568 37.3737C27.4581 34.6775 20.6806 34.6775 16.5226 37.3737Z"
        fill={color}
      />
    </svg>
  );
}