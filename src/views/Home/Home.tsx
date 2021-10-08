import { ReactElement } from 'react';
import { Spinner } from '@chakra-ui/react';

import { useApodMedia } from 'hooks/useApodMedia';
import { MediaCard } from 'components/MediaCard';
import { EmptyState } from '../../components/EmptyState';
import { FaExclamationTriangle, FaQuestionCircle } from 'react-icons/all';

export const Home = (): ReactElement => {
  const { getApod, apodMedia, firstRequestError, isLoading } = useApodMedia();
  const tryAgain = 'Spróbuj ponownie';

  if (isLoading) {
    return <Spinner />;
  }

  if (firstRequestError) {
    return (
      <EmptyState
        icon={<FaExclamationTriangle size="40px" color="red" />}
        text="Nie udało się załadować zdjęcia"
        action={getApod}
        actionText={tryAgain}
      />
    );
  }

  if (!apodMedia) {
    return (
      <EmptyState
        icon={<FaQuestionCircle size="40px" />}
        text="Nie udało się załadować zdjęcia"
        action={getApod}
        actionText={tryAgain}
      />
    );
  }

  return <MediaCard apodMedia={apodMedia} getNextMedia={getApod} />;
};
