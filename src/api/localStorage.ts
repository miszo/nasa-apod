import { ApodMedia } from '../types/media';

export const savedMediaListStorageKey = 'apod_saved_media';

export const getSavedMediaList = (): ApodMedia[] => {
  const storageString = localStorage.getItem(savedMediaListStorageKey) ?? '[]';
  return JSON.parse(storageString) as ApodMedia[];
};

export const saveMedia = (media: ApodMedia) => {
  const savedMediaList = getSavedMediaList();
  localStorage.setItem(savedMediaListStorageKey, JSON.stringify([media, ...savedMediaList]));
};

export const unsaveMedia = (media: ApodMedia) => {
  const savedMediaList = getSavedMediaList();
  const newSavedMediaList = savedMediaList.filter(({ url }) => url !== media.url);
  localStorage.setItem(savedMediaListStorageKey, JSON.stringify(newSavedMediaList));
};

export const getIsMediaSaved = (url: string) => {
  const savedMediaList = getSavedMediaList();
  const foundMedia = savedMediaList.find((media) => media.url === url);
  return Boolean(foundMedia);
};
