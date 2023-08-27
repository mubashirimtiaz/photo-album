'use client';

import { CldImage } from 'next-cloudinary';
import { TEventInfo } from './type';

const DisplayImage = (image: TEventInfo) => {
  return (
    <CldImage
      key={image.public_id}
      src={image.public_id}
      width={image.width}
      height={image.height}
      alt={image.filename}
      className='w-1/3'
    />
  );
};

export default DisplayImage;
