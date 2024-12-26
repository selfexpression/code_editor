import { useState, useRef, useCallback, useEffect } from 'react';
import type { ResizeVariants } from '../../types/resize';

interface ResizesState {
  width?: number;
  height?: number;
}

export const useResize = () => {
  const [sizes, setSizes] = useState<ResizesState>({});
  const resizingRef = useRef(false);
  const directionRef = useRef<ResizeVariants>(null);

  const handleMouseDown = useCallback((direction: ResizeVariants) => {
    resizingRef.current = true;
    directionRef.current = direction;

    document.body.style.userSelect = 'none';
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!resizingRef.current) return;
    e.preventDefault();

    setSizes((prev) => {
      const newSizes = { ...prev };
      if (directionRef.current === 'horizontal') {
        newSizes.width = e.clientX;
      } else {
        newSizes.height = e.clientY;
      }
      return newSizes;
    });
  }, []);

  const handleMouseUp = useCallback(() => {
    resizingRef.current = false;
    directionRef.current = null;

    document.body.style.userSelect = '';
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return { sizes, handleMouseDown };
};
