import { Box } from '@/components/Box'
import { Button } from '@/components/Button';

const Home = () => {
  return (
    <Box display="flex" gap="2" padding="8" justifyContent="center">
      <Button as="a" href="/1">Go to user 1</Button>
      <Button as="a" href="/2">Go to user 2</Button>
    </Box>
  )
}

export default Home;