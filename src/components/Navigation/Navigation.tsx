import React, { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Image, useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { RouteDefinition } from 'AppRouter';

import logo from 'assets/images/nasa-192.png';

export const Navigation = (): ReactElement => (
  <Box>
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'60px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle="solid"
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align="center"
    >
      <Link as={RouterLink} to={RouteDefinition.home}>
        <Image src={logo} h={50} alt="Strona główna" />
      </Link>
      <Flex align="center" ml={5} justifyContent="space-between" grow={1}>
        <Link as={RouterLink} to={RouteDefinition.saved}>
          Zapisane
        </Link>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  </Box>
);
