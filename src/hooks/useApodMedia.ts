import { useCallback, useEffect, useState } from 'react';

import { RequestState } from 'types/request';
import { ApodMedia } from 'types/media';
import { getApod } from '../api/getApod';
import { AxiosError } from 'axios';
import { useToast } from '@chakra-ui/toast';
import { defaultToastOptions } from '../config/toast';

export const useApodMedia = () => {
  const [requestState, setRequestState] = useState<RequestState>(RequestState.idle);
  const [data, setData] = useState<ApodMedia | undefined>();
  const [error, setError] = useState<AxiosError | undefined>();
  const toast = useToast();

  const sendRequest = useCallback(() => {
    setRequestState(RequestState.fetching);
    getApod()
      .then((response) => {
        setData(response);
        setError(undefined);
        setRequestState(RequestState.success);
        return response;
      })
      .catch((requestError) => {
        setError(requestError);
        setRequestState(RequestState.error);
        toast({
          ...defaultToastOptions,
          title: 'Błąd przy pobieraniu zdjęcia.',
          status: 'error',
          isClosable: true,
        });
      });
  }, [toast]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return {
    apodMedia: data,
    firstRequestError: error && !data,
    getApod: sendRequest,
    isLoading: [RequestState.idle, RequestState.fetching].includes(requestState),
  };
};
