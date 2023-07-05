import React from 'react';

type Props = {
  value: number;
  containerColor?: string;
  progressColor?: string;
  containerHeight?: number;
  progressHeight?: number;
  radius?: number;
};

export default function ProgressBar({ value, containerColor, progressColor, containerHeight = 0.2, progressHeight = 0.2, radius = 0.1 }: Props) {
  return (
    <div style={{ backgroundColor: containerColor, height: `${containerHeight}rem`, borderRadius: `${radius}rem`, width: '100%' }}>
      <span
        style={{
          transition: 'all .2s ease-in-out',
          display: 'flex',
          width: `${value}%`,
          backgroundColor: progressColor,
          height: `${progressHeight}rem`,
          borderRadius: `${radius}rem`,
        }}
      />
    </div>
  );
}
