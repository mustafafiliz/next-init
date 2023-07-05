import { IIcon } from '@/interfaces/Icons/icons.interface';

export default function ChevronForwardIcon({ width = 8, height = '100%', color = '#18181C' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <path d="M1 1L6.99998 7L1 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
