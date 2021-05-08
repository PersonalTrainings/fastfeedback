import { Heading, Button, Text, Code } from '@chakra-ui/react';

import { useAuth } from '@/libs/auth';

export default function Home() {
  const { user, signInWithGithub, signOut } = useAuth();
  return (
    <div>
      <main>
        <Heading>Fast Feedback</Heading>
        <Text>
          Current user: <Code>{user?.email || 'Not provided'}</Code>
        </Text>
        <Button onClick={user ? signOut : signInWithGithub}>
          {user ? 'Sign Out' : 'Sign In'}
        </Button>
      </main>
    </div>
  );
}
