import Image from "next/image";
import { useRef, useEffect } from 'react';

interface ProductDetailCardProps {
  title: string;
  description: string;
  mediaSrc: string;
  mediaType: 'image' | 'video';
  mediaAlt: string;
}

export const ProductDetailCard: React.FC<ProductDetailCardProps> = ({
  title,
  description,
  mediaSrc,
  mediaType,
  mediaAlt,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay video only if it's a video card and the ref is set
    if (mediaType === 'video' && videoRef.current) {
      videoRef.current.play().catch(error => {
        // Autoplay was prevented, handle silently or log if needed
        console.error("Video autoplay prevented:", error);
      });
    }
  }, [mediaType]); // Dependency array includes mediaType

  return (
    <div className="bg-gray-100 p-24 py-20 rounded-3xl flex flex-col items-center h-full">
      <div className="w-full h-[400px] rounded-md relative overflow-hidden p-2">
        {mediaType === 'image' ? (
          <Image 
            src={mediaSrc} 
            alt={mediaAlt} 
            layout="fill"
            objectFit="contain"
          />
        ) : (
          <video
            ref={videoRef}
            src={mediaSrc}
            width="100%"
            height="100%"
            className="object-contain w-full h-full"
            autoPlay
            muted
            loop
            playsInline // Added for better mobile compatibility
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="mt-auto text-center">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-md">{description}</p>
      </div>
      
    </div>
  );
}; 