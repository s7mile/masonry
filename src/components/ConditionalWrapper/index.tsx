'use client';

import { ReactNode, useEffect, useState } from 'react';

interface ConditionalWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ConditionalClientWrapper({
  children,
  fallback,
}: ConditionalWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return fallback ?? null;
  return children;
}
