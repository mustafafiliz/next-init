import { IIcon } from '@/interfaces/Icons/icons.interface';

export default function MiniPopupIcon({ color = '#D62631' }: IIcon) {
  return (
    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="20" rx="8" fill={color} />
      <path d="M10 19.6569L15.6569 14L21.3137 19.6569L17.0711 23.8995C16.29 24.6805 15.0237 24.6805 14.2426 23.8995L10 19.6569Z" fill={color} />
    </svg>
  );
}
