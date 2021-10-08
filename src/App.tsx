import { ReactElement } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { AppRouter } from 'AppRouter';

export const App = (): ReactElement => (
  <Box textAlign="center" fontSize="xl">
    <Flex direction="column" grow={1} shrink={0} basis="100vh">
      <AppRouter />
    </Flex>
  </Box>
);
