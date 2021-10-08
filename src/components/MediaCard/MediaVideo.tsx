import { ReactElement, useState } from 'react';
import { Button, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { ApodMedia } from 'types/media';

type MediaVideoProperties = Pick<ApodMedia, 'thumbnailUrl' | 'title' | 'url'>;

const EmbedWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 400px;
  min-width: 600px;
`;

const EmbedIFrame = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const MediaVideo = ({ thumbnailUrl, url, title }: MediaVideoProperties): ReactElement => {
  const [isPreview, setIsPreview] = useState<boolean>(true);

  if (isPreview) {
    return (
      <Button h="400px" w="full" onClick={() => setIsPreview(false)}>
        <Image h="400px" w="full" src={thumbnailUrl} objectFit="contain" />
      </Button>
    );
  }
  return (
    <EmbedWrapper>
      <EmbedIFrame height="400" src={url} allowFullScreen title={title} />
    </EmbedWrapper>
  );
};
