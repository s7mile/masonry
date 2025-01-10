import React from 'react';
import cn from 'classnames';
import st from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  margin?: string;
}

export default function Skeleton({
  className,
  width = 'auto',
  height = 'auto',
  margin = '0',
}: SkeletonProps) {
  const skeletonProperties = {
    '--skeleton-width': typeof width === 'number' ? `${width}px` : width,
    '--skeleton-height': typeof height === 'number' ? `${height}px` : height,
    '--skeleton-margin': margin,
  } as React.CSSProperties;

  return <div className={cn(st['skeleton'], className)} style={skeletonProperties}></div>;
}
