export type TUploadEvent = {
  event: 'success' | 'progress' | 'error';
  info: {
    bytes: number;
    public_id: string;
    resource_type: string;
    secure_url: string;
    signature: string;
    tags: string[];
    thumbnail_url: string;
    url: string;
    version: number;
  };
};
