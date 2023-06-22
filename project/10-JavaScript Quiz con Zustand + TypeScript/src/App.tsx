import { Container, Stack, Typography } from '@mui/material';
import './App.css';
import { JavaScriptLogo } from './JavascripLogo';

function App() {
  return (
    <main>
      <Container maxWidth='sm'>
        <Stack
          direction='row'
          gap={2}
          alignItems='center'
          justifyContent='center'
        >
          <JavaScriptLogo />
          <Typography variant='h3' component='h1'>
            JavaScript Quizz
          </Typography>
        </Stack>
      </Container>
    </main>
  );
}

export default App;
