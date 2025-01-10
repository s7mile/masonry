import React from 'react';
import cn from 'classnames';
import { mediumSize, wideSize } from '@/src/constants/resolution';
import Skeleton from '@/src/components/Skeleton';
import st from './MasonryLoading.module.scss';

const contents = () => {
  return (
    <div>
      <Skeleton className={cn(st['loading-thumb'])} />
      <Skeleton className={cn(st['loading-title'])} />
      <Skeleton className={cn(st['loading-c-keyword1'])} />
      <Skeleton className={cn(st['loading-c-keyword2'])} />
    </div>
  );
};

const keywords = () => {
  return (
    <div>
      <Skeleton className={cn(st['loading-keytitle'])} />
      <Skeleton className={cn(st['loading-keytitle'])} />
      <Skeleton className={cn(st['loading-k-keyword1'])} />
      <Skeleton className={cn(st['loading-k-keyword1'])} />
      <Skeleton className={cn(st['loading-k-keyword2'])} />
      <Skeleton className={cn(st['loading-k-keyword1'])} />
      <Skeleton className={cn(st['loading-k-keyword3'])} />
    </div>
  );
};

export default function MasonryLoading() {
  const sizeProperties = {
    '--medium': `${mediumSize}px`,
    '--wide': `${wideSize}px`,
  } as React.CSSProperties;
  return (
    <div className={cn(st['loading-wrap'])} style={sizeProperties}>
      <div className={cn(st['wide'])}>
        <div>
          {contents()}
          {contents()}
          {contents()}
        </div>
        <div>
          {contents()}
          {contents()}
          {keywords()}
        </div>
        <div>
          {keywords()}
          {contents()}
          {contents()}
        </div>
        <div>
          {contents()}
          {contents()}
          {contents()}
        </div>
      </div>
      <div className={cn(st['medium'])}>
        <div>
          {contents()}
          {contents()}
          {contents()}
          {keywords()}
        </div>
        <div>
          {contents()}
          {contents()}
          {contents()}
          {contents()}
        </div>
        <div>
          {keywords()}
          {contents()}
          {contents()}
          {contents()}
        </div>
      </div>
      <div className={cn(st['default'])}>
        <div>
          {contents()}
          {keywords()}
          {contents()}
          {contents()}
          {contents()}
          {contents()}
        </div>
        <div>
          {contents()}
          {contents()}
          {contents()}
          {contents()}
          {keywords()}
          {contents()}
        </div>
      </div>
    </div>
  );
}
