'use client';

import React from 'react';
import cn from 'classnames';
import { mediumSize, wideSize } from '@/src/constants/resolution';
import useMasonryLayout from '@/src/hooks/useMasonryLayout';

import MasonryLoading from '@/src/components/Masonry/MasonryLoading';
import { ConditionalClientWrapper } from '@/src/components/ConditionalWrapper';
import useDimension from '@/src/hooks/useDimension';
import st from './Masonry.module.scss';

interface MasonryListProps {
  items: React.ReactNode[];
}

export default function Masonry({ items }: MasonryListProps) {
  const { width } = useDimension();
  const { defaultElements, mediumElements, wideElements } = useMasonryLayout(items);

  const elements = () => {
    // wide(pc)
    if (width >= wideSize) {
      return (
        <div className={cn(st['wrap-grid'], st['wide'])}>
          {wideElements.map((element, index) => (
            <div className={cn(st['wrap-grid-column'])} key={index}>
              {element}
            </div>
          ))}
        </div>
      );
    }

    // medium(tablet)
    if (width >= mediumSize) {
      return (
        <div className={cn(st['wrap-grid'], st['medium'])}>
          {mediumElements.map((element, index) => (
            <div className={cn(st['wrap-grid-column'])} key={index}>
              {element}
            </div>
          ))}
        </div>
      );
    }

    // small(mobile)
    return (
      <div className={cn(st['wrap-grid'], st['default'])}>
        {defaultElements.map((element, index) => (
          <div className={cn(st['wrap-grid-column'])} key={index}>
            {element}
          </div>
        ))}
      </div>
    );
  };

  return (
    <ConditionalClientWrapper fallback={<MasonryLoading />}>
      {elements()}
    </ConditionalClientWrapper>
  );
}
