import { useEffect, useRef } from 'react';

export function useSeamlessVideoFade(src: string) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fadeAnimation: number;

    const animateOpacity = (from: number, to: number, duration: number, onComplete?: () => void) => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentOpacity = from + (to - from) * progress;

        if (videoRef.current) {
          videoRef.current.style.opacity = currentOpacity.toString();
        }

        if (progress < 1) {
          fadeAnimation = requestAnimationFrame(animate);
        } else if (onComplete) {
          onComplete();
        }
      };

      cancelAnimationFrame(fadeAnimation);
      fadeAnimation = requestAnimationFrame(animate);
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
      animateOpacity(0, 1, 500);
    };

    const handleTimeUpdate = () => {
      const remaining = video.duration - video.currentTime;
      // Fade out exactly when <= 0.55s remaining and we haven't already started fading out heavily
      if (remaining <= 0.55 && Number(video.style.opacity || 1) > 0.5) {
        animateOpacity(1, 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        animateOpacity(0, 1, 500);
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(fadeAnimation);
    };
  }, [src]);

  return videoRef;
}
