'use client';

import { CldUploadButton, CldUploadWidgetResults } from 'next-cloudinary';
import { useState } from 'react';
import { TUploadEvent } from './type';
import { Button } from '@/components/ui/button';
import { config } from '@/config';

const GalleryPage = () => {
  const [imageId, setImageId] = useState('');

  const handleUpload = (result: CldUploadWidgetResults) => {
    const { info, event } = result as TUploadEvent;
    if (event === 'success') {
      setImageId(info.public_id);
    }
  };

  return (
    <section>
      <div className='flex justify-between'>
        <h1 className='text-4xl font-bold'>Gallery</h1>
        <Button asChild>
          <div className='flex gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
              />
            </svg>

            <CldUploadButton
              uploadPreset={config.uploadPreset}
              onUpload={handleUpload}
            />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default GalleryPage;
