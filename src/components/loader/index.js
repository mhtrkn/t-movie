import React, { useEffect, useRef } from 'react';
import animationData from '../../../public/loader.json';
import Lottie from 'lottie-web';

const LoaderModal = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: containerRef.current,
      animationData: animationData,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });

    animation.setSpeed(2.5);

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className='w-full left-0 right-0 top-0 bottom-0 h-full fixed z-50 bg-black bg-opacity-75 flex items-center justify-center'>
        <div ref={containerRef} style={{ width: 160, height: 160 }} />
    </div>
  );
};

export default LoaderModal;
