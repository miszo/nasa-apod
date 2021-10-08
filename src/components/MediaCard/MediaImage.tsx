import { ReactElement } from 'react';
import { Image } from '@chakra-ui/react';
import { ApodMedia } from '../../types/media';

type MediaImageProperties = Pick<ApodMedia, 'url'>;

export const MediaImage = ({ url }: MediaImageProperties): ReactElement => (
  <Image h="400px" w="full" src={url} objectFit="contain" />
);
