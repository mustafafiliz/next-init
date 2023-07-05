import { colors } from '@/lib/colors';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type Props = {
  count?: number;
  height?: string | number;
  width?: string | number;
};

export default function AppSkeleton({ count, width = '100%', height = '1.5rem' }: Props) {
  return (
    <SkeletonTheme borderRadius={5} baseColor={colors.skeletonBaseColor} highlightColor={colors.skeletonHighlightColor}>
      <Skeleton style={{ marginTop: 8 }} count={count} height={height} width={width} />
    </SkeletonTheme>
  );
}
