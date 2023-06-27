import { useQuestionsStore } from "../store/questions";

export const useQuestionData = () => {
  const questions = useQuestionsStore((state) => state.questions)
  let correct = 0;
  let incorrect = 0;
  let unanswered = 1;
  //console.log(questions);
  

  return { correct, incorrect, unanswered };
}
