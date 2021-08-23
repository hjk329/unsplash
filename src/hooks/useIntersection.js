import { useEffect, useRef, useState } from 'react';

export const useIntersection = () => {
  const [inView, setInView] = useState(false)

  const sentinelRef = useRef(null);

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (sentinelRef.current) {
          setInView(entry.isIntersecting)
        }
      });
    };

    const observer = new IntersectionObserver(callback, {});
    observer.observe(sentinelRef.current);
    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    }
  }, [])

  return [inView, sentinelRef]
}
