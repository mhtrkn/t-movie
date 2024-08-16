import React, { useEffect, useRef, useState } from "react";
import animationData from "../../../public/playing.json";
import Lottie from "lottie-web";
import NotFoundPage from "@/app/not-found";

const PlayingModal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const animation = Lottie.loadAnimation({
        container: containerRef.current,
        animationData: animationData,
        renderer: "svg",
        loop: true,
        autoplay: true
      });

      const timer = setInterval(() => {
        if (count < 5) {
          setCount((prev) => prev + 1);
        }
      }, 1000);

      animation.setSpeed(1.5);

      return () => {
        animation.destroy();
        clearInterval(timer);
        setCount(0);
      };
    }
  }, []);

  return (
    <div className="w-full left-0 right-0 top-0 bottom-0 h-screen fixed z-50 bg-dark flex items-center justify-center">
      {count < 5 ? (
        <div ref={containerRef} style={{ width: 160, height: 160 }} />
      ) : (
        <NotFoundPage className={"mt-0"} />
      )}
    </div>
  );
};

export default PlayingModal;
