import { Container, Stack, Typography } from '@mui/material';
import { JavaScriptLogo } from '../src/components/JavascripLogo';
import './App.css';
import { Game } from './components/Game';
import { Result } from './components/Result';
import Start from './components/Start';
import { useQuestionData } from './hooks/useQuestionData';
import { useQuestionsStore } from './store/questions';

function App() {
  const questions = useQuestionsStore((state) => state.questions);
  const { unanswered } = useQuestionData();

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
        {questions.length === 0 && <Start />}
        {questions.length > 0 && unanswered > 0 && <Game />}
        {questions.length > 0 && unanswered === 0 && <Result />}
      </Container>
    </main>
  );
}

export default App;
