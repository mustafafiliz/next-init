import { IIcon } from '@/interfaces/Icons/icons.interface';

export default function CircleEditIcon({ width = 40, height = 40, color = '#18181C' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={width} height={height} rx="20" fill={color} />
      <path
        d="M19.1108 12.1982H17.5306C13.5802 12.1982 12 13.7784 12 17.7288V22.4694C12 26.4198 13.5802 27.9999 17.5306 27.9999H22.2711C26.2215 27.9999 27.8017 26.4198 27.8017 22.4694V20.8892"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.092 13.0044L16.8661 19.2302C16.6291 19.4673 16.3921 19.9334 16.3446 20.2732L16.0049 22.6513C15.8785 23.5125 16.4869 24.113 17.3481 23.9945L19.7262 23.6547C20.0581 23.6073 20.5242 23.3703 20.7691 23.1333L26.995 16.9074C28.0695 15.8329 28.5752 14.5846 26.995 13.0044C25.4148 11.4242 24.1665 11.9299 23.092 13.0044Z"
        stroke="white"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22.1992 13.8975C22.7286 15.7858 24.206 17.2632 26.1022 17.8005" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
