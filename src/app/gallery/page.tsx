import cloudinary from 'cloudinary';
import UploadButton from './upload-button';
import { TEventInfo } from './type';
import DisplayImage from './display-image';

const GalleryPage = async () => {
  const result: { resources: TEventInfo[] } = await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(30)
    .execute();
  return (
    <section>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>Gallery</h1>
          <UploadButton />
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {result.resources.map((image) => (
            <DisplayImage key={image.public_id} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
