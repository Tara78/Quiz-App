import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { Button } from 'styledComponents/StyledButton';
import { Wrapper } from 'styledComponents/containers';


const EndPage = () => {
  const dispatch = useDispatch();
  const answers = useSelector((store) => store.quiz.answers);
  const correctAnswers = useSelector(
    (state) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      state.quiz.answers.filter((answer) => answer.isCorrect === true).length
  );

  return (
    <Wrapper>
      <h1>Quiz Over</h1>
      <h3>
        You did: {correctAnswers} out of {answers.length} Questions!
      </h3>
      <Button
        type="button"
        onClick={() => {
          dispatch(quiz.actions.restart());
        }}
      >
        restart
      </Button>
    
    </Wrapper>
  );
};

export default EndPage;
