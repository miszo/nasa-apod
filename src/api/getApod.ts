import { ApodMedia } from 'types/media';

import { http } from './http';

export const getApod = (): Promise<ApodMedia> =>
  http.get('apod', { params: { count: 1, thumbs: true } }).then(({ data }) => {
    const [media] = data;
    return media;
  });
