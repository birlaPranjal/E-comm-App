import React, { useRef, useEffect } from 'react';

interface VideoComponentProps {
  src: string;
  onComplete: () => void;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src, onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', onComplete);
      videoElement.play();
      return () => {
        videoElement.removeEventListener('ended', onComplete);
      };
    }
  }, [onComplete]);

  return (
    <div className="flex justify-center items-center h-screen">
      <video ref={videoRef} src={src} className="h-screen w-full scale-125 md:scale-100" autoPlay playsInline muted />
    </div>
  );
};

export default VideoComponent;
