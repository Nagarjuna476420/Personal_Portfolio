import { useRef, useCallback } from 'react';

/**
 * Custom hook to apply 3D tilt perspective effect to cards on mouse hover
 */
export function useTiltEffect(maxAngle = 10, perspective = 700) {
  const elementRef = useRef(null);

  const handlePointerMove = useCallback((e) => {
    const el = elementRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotateX = -y * maxAngle;
    const rotateY = x * maxAngle;

    el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }, [maxAngle, perspective]);

  const handlePointerLeave = useCallback(() => {
    const el = elementRef.current;
    if (!el) return;
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }, [perspective]);

  return {
    ref: elementRef,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave
  };
}
