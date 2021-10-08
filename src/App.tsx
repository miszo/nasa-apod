import React, { ReactElement } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { AppRouter } from 'AppRouter';

export const App = (): ReactElement => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh">
      <AppRouter />
    </Grid>
  </Box>
);
