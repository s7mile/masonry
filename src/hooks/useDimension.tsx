'use client';

import { useEffect, useState, useTransition } from 'react';
import { throttle } from 'lodash';

const useDimension = () => {
  // 주의 : 주로 recoil dimensionAtom에 저장된 width, height을 사용함
  const [dimension, setDimension] = useState({width: 0, height:0});
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const updateDimension = throttle(() => {
      startTransition(() => {
        const { innerWidth, innerHeight } = window;
        setDimension({
          width: innerWidth,
          height: innerHeight,
        });
      });
    }, 200);

    updateDimension();
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, []);

  return {
    isPending,
    width: dimension.width,
    height: dimension.height,
  };
};

export default useDimension;
