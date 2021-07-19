import { FC } from 'react';
import NextImage from 'next/image';

interface ImageData {
  image: string | any;
  alt?: string;
  title?: string;
  url?: string;
  width?: string | number;
  height?: string | number;
}

interface ImageProps {
  image: ImageData;
  defaultWidth?: string | number;
  defaultHeight?: string | number;
  priority?: boolean;
}

export const Image: FC<ImageProps> = ({ image, defaultWidth, defaultHeight, priority }: ImageProps) => {
  const width = image.width || defaultWidth;
  const height = image.height || defaultHeight;
  const imageSrc = image.image;

  return (
    <>
      {width && height ? (
        <NextImage
          src={imageSrc}
          alt={image.alt || image.title}
          title={image.title || image.alt}
          width={width}
          height={height}
          priority={priority}
        />
      ) : (
        <NextImage src={imageSrc} alt={image.alt || image.title} title={image.title || image.alt} layout="fill" priority={priority} />
      )}
    </>
  );
};

export default Image;
