import React from 'react';
import { useSelector } from 'react-redux';
import { StartPage } from './StartPage';
import { EndPage } from './EndPage';
import { CurrentQuestion } from './CurrentQuestion';

export const Navigation = () => {
  const showQuiz = useSelector((state) => state.quiz.showQuiz);
  const quizOver = useSelector((state) => state.quiz.quizOver);

  if (showQuiz) {
    return <CurrentQuestion />;
  }

  if (quizOver) {
    return <EndPage />;
  }

  // default page
  return <StartPage />;
};
