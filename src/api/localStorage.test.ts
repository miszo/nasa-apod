import { getIsMediaSaved, savedMediaListStorageKey, saveMedia, unsaveMedia } from './localStorage';
import { imageStub, videoStub } from '../tests/stubs/media';

const getParsedList = () => {
  const mediaList = localStorage.getItem(savedMediaListStorageKey) ?? '[]';
  return JSON.parse(mediaList);
};

describe('localStorage wrapper', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  describe('saveMedia', () => {
    it('should save passed media', () => {
      saveMedia(videoStub);
      const mediaList = getParsedList();
      expect(mediaList.length).toEqual(1);
    });
  });

  describe('unsaveMedia', () => {
    it('should unsave passed media only once', () => {
      localStorage.setItem(savedMediaListStorageKey, JSON.stringify([imageStub]));
      unsaveMedia(imageStub);
      const mediaList = getParsedList();
      expect(mediaList.length).toEqual(0);
    });
  });

  describe('getSavedMediaList', () => {
    it('should return empty array when localStorage is empty', () => {
      const mediaList = getParsedList();
      expect(mediaList).toEqual([]);
    });

    it('should return saved list when localStorage is not empty', () => {
      localStorage.setItem(savedMediaListStorageKey, JSON.stringify([imageStub]));
      const mediaList = localStorage.getItem(savedMediaListStorageKey) ?? '[]';
      expect(mediaList).toEqual(JSON.stringify([imageStub]));
    });
  });

  describe('getIsMediaSaved', () => {
    localStorage.setItem(savedMediaListStorageKey, JSON.stringify([imageStub]));
    expect(getIsMediaSaved(imageStub.url)).toBeTruthy();
  });
});
