import { useState, useEffect } from "react";

export default function useFadeIn(
  baseDelay = 150,
  index = 0,
  staggerDelay = 100
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const totalDelay = baseDelay + index * staggerDelay;

    console.log(`Card ${index} delay: ${totalDelay}ms`);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, totalDelay);

    return () => clearTimeout(timer);
  }, [baseDelay, index, staggerDelay]);

  return isVisible;
}
