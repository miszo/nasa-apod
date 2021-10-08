import { ReactElement } from 'react';
import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import { FaHeart, FaRandom } from 'react-icons/fa';

import { ApodMedia, isImage } from 'types/media';
import { useSaveMediaItem } from 'hooks/useSaveMediaItem';

import { MediaImage } from './MediaImage';
import { MediaVideo } from './MediaVideo';

interface MediaCardProperties {
  apodMedia: ApodMedia;
  getNextMedia?: () => void;
}

export const MediaCard = ({ apodMedia, getNextMedia }: MediaCardProperties): ReactElement => {
  const { title, date } = apodMedia;
  const { isSaved, toggleSave } = useSaveMediaItem(apodMedia);

  const Media = isImage(apodMedia) ? MediaImage : MediaVideo;
  return (
    <Box maxW="800px" borderWidth="1px" boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
      <Media {...apodMedia} />
      <Box p={6}>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {title}
          </Heading>
          <Text color={'gray.500'}>{date}</Text>
        </Stack>
        <Stack direction={'row'} justify={'center'} spacing={6}>
          <Button variant="solid" onClick={toggleSave} leftIcon={<FaHeart color={isSaved ? 'red' : ''} />}>
            Zapisz
          </Button>
          {getNextMedia ? (
            <Button variant="solid" onClick={getNextMedia} leftIcon={<FaRandom />}>
              Następne zdjęcie
            </Button>
          ) : undefined}
        </Stack>
      </Box>
    </Box>
  );
};
