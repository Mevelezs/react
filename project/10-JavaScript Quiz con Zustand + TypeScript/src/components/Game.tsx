import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import SyntaxHighlighrer from 'react-syntax-highlighter'; // hay que instalarle los tipos
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useQuestionsStore } from '../store/questions';
import { type Question as QuestionType } from '../types';

export const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  const createHandleClick = (index: number) => {
    selectAnswer(info.id, index);
  };
  return (
    <Card
      variant='outlined'
      sx={{ backgroundColor: '#222', p: 2, textAlign: 'left', marginTop: 4 }}
    >
      <Typography variant='h5'>{info.question}</Typography>

      <SyntaxHighlighrer language='javascript' style={gradientDark}>
        {info.code}
      </SyntaxHighlighrer>

      <List sx={{ backgroundColor: '#333' }} disablePadding>
        {info.answers.map((answers, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton onClick={() => createHandleClick(index)}>
              <ListItemText primary={answers} sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export const Game = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestions = useQuestionsStore((state) => state.currentCuestion);

  const questionInfo = questions[currentQuestions];

  return (
    <>
      <Question info={questionInfo} />
    </>
  );
};
