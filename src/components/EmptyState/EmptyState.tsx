import { ReactNode } from 'react';
import { Box, Button, Center, Heading, Stack } from '@chakra-ui/react';
import { FaRandom } from 'react-icons/fa';

interface EmptyStateProperties {
  icon: ReactNode;
  text: string;
  actionText: string;
  action?: () => void;
}

export const EmptyState = ({ icon, text, actionText, action }: EmptyStateProperties) => (
  <Box maxW="800px" borderWidth="1px" boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
    <Center pt="20px">{icon}</Center>
    <Box p={6}>
      <Stack spacing={0} align={'center'} mb={5}>
        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
          {text}
        </Heading>
      </Stack>
      {action ? (
        <Stack direction={'row'} justify={'center'} spacing={6}>
          <Button variant="solid" onClick={action} leftIcon={<FaRandom />}>
            {actionText}
          </Button>
        </Stack>
      ) : undefined}
    </Box>
  </Box>
);
