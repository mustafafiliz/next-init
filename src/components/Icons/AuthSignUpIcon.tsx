import { IIcon } from '@/interfaces/Icons/icons.interface';

export default function AuthSignUpIcon({ color = 'white' }: IIcon) {
  return (
    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18.6678H10.8005" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.9003 20.6869V16.6486" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M8.34376 9.95503C8.23878 9.94493 8.11279 9.94493 7.99731 9.95503C5.49858 9.87426 3.51432 7.90557 3.51432 5.48256C3.50382 3.00908 5.59307 1 8.16529 1C10.7375 1 12.8267 3.00908 12.8267 5.48256C12.8267 7.90557 10.832 9.87426 8.34376 9.95503Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.16533 21C6.25457 21 4.35434 20.5356 2.90552 19.6068C0.364828 17.9712 0.364828 15.3059 2.90552 13.6805C5.79266 11.8229 10.5275 11.8229 13.4147 13.6805"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
