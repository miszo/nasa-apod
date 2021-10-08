import { useCallback } from 'react';
import { useBoolean } from '@chakra-ui/hooks';

import { getIsMediaSaved, saveMedia, unsaveMedia } from 'api/localStorage';
import { ApodMedia } from 'types/media';

export const useSaveMediaItem = (media: ApodMedia) => {
  const [isSaved, setIsSaved] = useBoolean(getIsMediaSaved(media.url));

  const save = useCallback(() => {
    saveMedia(media);
    setIsSaved.on();
  }, [media, setIsSaved]);

  const unsave = useCallback(() => {
    unsaveMedia(media);
    setIsSaved.off();
  }, [media, setIsSaved]);

  const toggleSave = useCallback(() => {
    if (isSaved) {
      unsave();
      return;
    }
    save();
  }, [isSaved, save, unsave]);

  return { isSaved, toggleSave };
};
