export enum MediaType {
  image = 'image',
  video = 'video',
}

export interface ApodMedia {
  date: string;
  title: string;
  url: string;
  media: MediaType;
  thumbnailUrl?: string;
}

export const isImage = (media: ApodMedia): media is ApodMedia => {
  return media.thumbnailUrl === undefined;
};
