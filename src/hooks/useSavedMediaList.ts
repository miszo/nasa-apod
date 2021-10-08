import { useEffect, useState } from 'react';

import { getSavedMediaList } from 'api/localStorage';
import { ApodMedia } from 'types/media';

export const useSavedMediaList = () => {
  const [savedMediaList, setSavedMediaList] = useState<ApodMedia[]>([]);

  useEffect(() => {
    setSavedMediaList(getSavedMediaList());
  }, []);

  return savedMediaList;
};
