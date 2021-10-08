import { useCallback } from 'react';
import { useBoolean } from '@chakra-ui/hooks';
import { useToast } from '@chakra-ui/toast';

import { getIsMediaSaved, saveMedia, unsaveMedia } from 'api/localStorage';
import { ApodMedia } from 'types/media';
import { defaultToastOptions } from 'config/toast';

export const useSaveMediaItem = (media: ApodMedia) => {
  const [isSaved, setIsSaved] = useBoolean(getIsMediaSaved(media.url));
  const toast = useToast();

  const save = useCallback(() => {
    saveMedia(media);
    setIsSaved.on();
    toast({
      ...defaultToastOptions,
      title: 'Dodano zdjęcie do zapisanych.',
      status: 'success',
      isClosable: true,
    });
  }, [media, setIsSaved, toast]);

  const unsave = useCallback(() => {
    unsaveMedia(media);
    setIsSaved.off();
    toast({
      ...defaultToastOptions,
      title: 'Usunięto zdjęcie z zapisanych.',
      status: 'success',
      isClosable: true,
    });
  }, [media, setIsSaved, toast]);

  const toggleSave = useCallback(() => {
    if (isSaved) {
      unsave();
      return;
    }
    save();
  }, [isSaved, save, unsave]);

  return { isSaved, toggleSave };
};
