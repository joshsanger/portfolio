import {useEffect, useRef} from 'react';
import cn from 'classnames';
import {twMerge} from 'tailwind-merge';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  headingLevel?: number;
}

/**
 * TODO
 * - Add support for starting css position
 */
export default function Heading({
  children,
  className,
  headingLevel = 1,
}: HeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  /**
   * Handles animation outside of react to avoid re-renders and performance issues
   */
  useEffect(() => {
    if (!headingRef.current) return;

    const text = headingRef.current;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let isIntersecting = false;

    // take retina into account for lerping speed
    const pixelDensity = window.devicePixelRatio;
    let speed = 0.05 / pixelDensity;

    // set up intersection observer with state
    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
    });

    observer.observe(headingRef.current);

    /**
     * Handlle mouse movement
     */
    const handlleMouseMove = (e: MouseEvent) => {
      if (!isIntersecting) return;

      const rect = text.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    /**
     * Animations loop
     */
    function updateGradient() {
      // Lerp current position towards target position
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;

      text.style.backgroundImage = `radial-gradient(circle at ${currentX}px ${currentY}px, var(--color-one) 13%, var(--color-two) 54%)`;

      requestAnimationFrame(updateGradient);
    }

    updateGradient();

    document.addEventListener('mousemove', handlleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handlleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    //  @ts-ignore-next-line
    <HeadingTag
      ref={headingRef}
      className={twMerge(cn('gradient-heading', className))}
    >
      {children}
    </HeadingTag>
  );
}
