import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const EndPage = () => {
  const dispatch = useDispatch();
  const answers = useSelector((store) => store.quiz.answers);
  const answerCorrect = answers.filter((item) => item.correctAnswerIndex);

  return (
    <div>
      <p>This is the end page!</p>
      <h2>
        You did :{answerCorrect} out of {answers.length}
      </h2>
      <button
        type="button"
        onClick={() => {
          dispatch(quiz.actions.restart());
        }}
      >
        Restart
      </button>
    </div>
  );
};
