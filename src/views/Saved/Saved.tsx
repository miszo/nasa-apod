import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { SimpleGrid } from '@chakra-ui/react';
import { FaQuestionCircle } from 'react-icons/all';

import { useSavedMediaList } from 'hooks/useSavedMediaList';
import { MediaCard } from 'components/MediaCard';
import { EmptyState } from 'components/EmptyState';
import { RouteDefinition } from '../../AppRouter';

export const Saved = (): ReactElement => {
  const list = useSavedMediaList();
  const navigate = useNavigate();

  if (list.length === 0) {
    return (
      <EmptyState
        icon={<FaQuestionCircle size="40px" />}
        text="Nie dodano jeszcze żadnego zdjęcia do zapisanych"
        actionText="Zacznij przeglądać zdjęcia"
        action={() => navigate(RouteDefinition.home)}
      />
    );
  }
  return (
    <SimpleGrid position="absolute" top="80px" p="40px" columns={[2, null, 3]} spacing={10} pt="0" pb="80px">
      {list.map((media) => (
        <MediaCard apodMedia={media} />
      ))}
    </SimpleGrid>
  );
};
