import { useEffect, useState } from "react";

export function useScrollDirection(scrollContainerRef) {
    const [scrollDirection, setScrollDirection] = useState(null);
  
    useEffect(() => {
      if (!scrollContainerRef.current) return;
      let lastScrollY = scrollContainerRef.current.scrollTop;
  
      const updateScrollDirection = () => {
        const scrollY = scrollContainerRef.current.scrollTop;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      scrollContainerRef.current.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        scrollContainerRef.current.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollContainerRef, scrollDirection]);
    return scrollDirection;
  };
  