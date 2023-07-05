import Image from 'next/image';
import React, { CSSProperties } from 'react';

type Props = {
  height?: number;
  width?: number;
  src?: string;
  alt: string;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  style?: CSSProperties;
  cdn?: boolean
};

export default function AppImage({ cdn, sizes, fill, className = '', height, width, src = '/', alt, objectFit = 'contain', priority, style }: Props) {
  const _src = cdn ? process.env.NEXT_PUBLIC_UPLOADS + src : src
  return <Image sizes={sizes} fill={fill} priority={priority} className={className} src={_src} alt={alt} height={height} width={width} style={{ objectFit: objectFit, ...style }} />;
}
