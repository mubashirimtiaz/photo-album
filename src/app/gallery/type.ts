export type TUploadEvent = {
  event: 'success' | 'progress' | 'error';
  info: TEventInfo;
};

export type TEventInfo = {
  bytes: number;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: string[];
  thumbnail_url: string;
  url: string;
  filename: string;
  created_at: string;
  version: number;
  width: number;
  height: number;
};
