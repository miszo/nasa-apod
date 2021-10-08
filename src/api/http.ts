import axios, { AxiosTransformer } from 'axios';
import snakecaseKeys from 'snakecase-keys';

import { apiBaseUrl, apiKey } from 'config/environment';
import camelcaseKeys from 'camelcase-keys';

export const http = axios.create({
  baseURL: apiBaseUrl,
  params: snakecaseKeys({
    apiKey,
  }),
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    (data) => {
      if (Boolean(data)) {
        return camelcaseKeys(data, { deep: true });
      }
    },
  ],
});
