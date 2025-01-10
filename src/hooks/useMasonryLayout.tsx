import React, { ReactNode, useEffect, useState } from 'react';

const joinElement = (
  columnCount: number,
  baseArr: React.ReactNode[],
  income: React.ReactNode,
  incomeIndex: number,
) => {
  // 아이템을 해당하는 곳으로 왔다갔다 하면서 쪼개기 위함
  // 즉, 하나로 된 배열을 2개로 쪼개야 한다면 -> 0번째배열, 1번째배열, 0번째, 1번째.. 이런 방식으로 income이 base element에 합쳐지는 방식
  // 그러면 0번째에는 홀수의 index를 가졌던 애들로, 1번째에는 짝수의 index를 가졌던 애들로 구성된 element가 된다.

  const base: React.ReactNode[] = baseArr;
  const index = incomeIndex % columnCount;
  base[index] = (
    <>
      {base[index]}
      {income}
    </>
  );
};

// 2열(default), 3열(medium), 4열(wide) 섹션별로 나눠 놓는 작업
const useMasonryLayout = (items: React.ReactNode[]) => {
  const [defaultElements, setDefaultElements] = useState<ReactNode[]>([]);
  const [mediumElements, setMediumElements] = useState<ReactNode[]>([]);
  const [wideElements, setWideElements] = useState<ReactNode[]>([]);

  useEffect(() => {
    // 배열 단순 초기화
    const defaultArr: React.ReactNode[] = [];
    const mediumArr: React.ReactNode[] = [];
    const wideArr: React.ReactNode[] = [];

    // 컨텐츠 갯수만큼 다 돌려서 각 해상도별로 영역에 넣기
    for (let i = 0; i < items.length; i += 1) {
      joinElement(2, defaultArr, items[i], i);
      joinElement(3, mediumArr, items[i], i);
      joinElement(4, wideArr, items[i], i);
    }

    setDefaultElements(defaultArr);
    setMediumElements(mediumArr);
    setWideElements(wideArr);
  }, [items]);

  return { defaultElements, mediumElements, wideElements };
};

export default useMasonryLayout;
