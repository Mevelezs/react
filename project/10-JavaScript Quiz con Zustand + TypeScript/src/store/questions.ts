import confetti from 'canvas-confetti';
import { create } from 'zustand';
import { getAllQuestions } from '../service/question';
import { type Question } from '../types';

interface State {
  questions: Array<Question>;
  currentCuestion: number;
  selectAnswer: (questionId: number, answerIndex: number) => void;

  fetchQuestions: (limit: number) => Promise<void>;
}

export const useQuestionsStore = create<State>((set, get) => {
  // creo el estado global
  return {
    // estado y formas de actualizarlo
    questions: [], // initial state
    currentCuestion: 0, // <-- Posicion en el array de la pregunta actual

    fetchQuestions: async (limit: number) => {
      // funcion que cambia el estado
      const data = await getAllQuestions();

      const questions = data.sort(() => Math.random() - 0.5).slice(0, limit);
      console.log(questions);
      set({ questions });
    },

    selectAnswer: (questionId: number, answerIndex: number) => {
      const { questions } = get();
      console.log(questionId, answerIndex);

      // usar el structuredClone para clonar el objeto
      const newQuestions = structuredClone(questions);
      // encontramos el índice de la pregunta
      const questionIndex = newQuestions.findIndex((e) => e.id === questionId);
      // obtenemos la información de la pregunta
      const questionInfo = newQuestions[questionIndex];

      // averiguamos si el usuario ha seleccionado la respuesta correcta
      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;
      console.log(isCorrectUserAnswer);

      if (isCorrectUserAnswer) confetti();

      // cambiar esta información en la copia de la pregunta
      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: answerIndex,
      };

      // actualizamos el estado
      set({ questions: newQuestions })
      console.log(questions);
      
    },
  };
});
