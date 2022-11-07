import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { Button } from 'styledComponents/StyledButton';
import { Wrapper } from 'styledComponents/containers';

const StartPage = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <h1>Quiz</h1>

      <Button
        type="button"
        onClick={() => {
          dispatch(quiz.actions.startQuiz());
        }}
      >
        Start
      </Button>
    </Wrapper>
  );
};

export default StartPage;
