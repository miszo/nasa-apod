import { MediaType } from 'types/media';

export const imageStub = {
  date: '2000-08-01',
  mediaType: MediaType.image,
  title: 'X-Rays from Comet LINEAR',
  url: 'https://apod.nasa.gov/apod/image/0008/linear_chandra.jpg',
};

export const videoStub = {
  date: '2012-11-14',
  mediaType: MediaType.video,
  thumbnailUrl: 'https://img.youtube.com/vi/ZSt9tm3RoUU/0.jpg',
  title: 'Our Story in One Minute',
  url: 'https://www.youtube.com/embed/ZSt9tm3RoUU?rel=0',
};
