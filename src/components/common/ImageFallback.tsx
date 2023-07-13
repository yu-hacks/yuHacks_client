"use client";
import React, { useState } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: StaticImageData
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback
