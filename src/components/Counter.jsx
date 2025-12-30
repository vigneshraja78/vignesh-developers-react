import { useEffect, useRef, useState } from 'react';

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [hasStarted, target]);

  return (
    <h2 ref={ref} className="counter-num">
      {count}+
    </h2>
  );
}

export default Counter;
