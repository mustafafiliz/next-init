import { IIcon } from '@/interfaces/Icons/icons.interface';

export default function AuthSignInIcon({ color = 'white' }: IIcon) {
  return (
    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.995 9.95507C7.89236 9.94498 7.76919 9.94498 7.65629 9.95507C5.21344 9.87431 3.27356 7.9056 3.27356 5.48258C3.27356 3.00909 5.30581 1 7.83078 1C10.3454 1 12.388 3.00909 12.388 5.48258C12.3777 7.9056 10.4378 9.87431 7.995 9.95507Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.8629 13.6805C0.379034 15.316 0.379034 17.9813 2.8629 19.6068C5.68547 21.4644 10.3145 21.4644 13.1371 19.6068C15.621 17.9712 15.621 15.3059 13.1371 13.6805C10.3248 11.8329 5.69574 11.8329 2.8629 13.6805Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
