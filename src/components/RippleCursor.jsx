import React, { useEffect, useRef, useState } from "react";

const RippleCursor = () => {
  const [ripples, setRipples] = useState([]);
  const rippleId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const id = rippleId.current++;
      const newRipple = {
        id,
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600); // Ripple duration
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute w-8 h-8 bg-cyan-400 opacity-50 rounded-full animate-ripple"
          style={{
            left: ripple.x - 16,
            top: ripple.y - 16,
          }}
        />
      ))}
    </div>
  );
};

export default RippleCursor;