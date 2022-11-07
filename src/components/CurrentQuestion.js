import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { AnswerContainer, Wrapper } from 'styledComponents/containers';
import { StyledButton, Button } from 'styledComponents/StyledButton';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const questionsLength = useSelector((state) => state.quiz.questions.length);
  const answer = useSelector(
    (state) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      state.quiz.answers.find((a) => a.questionId === question.id)
    // eslint-disable-next-line function-paren-newline
  );

  const [disabledStyledButton, setDisabledStyledButton] = useState(false);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  // dispatch the the submitAnswer action
  const submitAnswer = (questionId, answerIndex) => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId,
        answerIndex
      })
    );
  };

  const handleNext = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setDisabledStyledButton(false);
  };

  const statusAnswer = () => {
    if (answer.isCorrect) {
      return 'right';
    } else {
      return 'wrong';
    }
  };

  return (
    <Wrapper>
      <h1 className="question-title">Question {question.id}:</h1>
      <AnswerContainer>
        <div className="question-text">{question.questionText}</div>
        {question.options.map((option, index) => {
          return (
            <StyledButton
              onClick={() => {
                submitAnswer(question.id, index);
                setDisabledStyledButton(true);
              }}
              disabled={disabledStyledButton}
              type="button"
              key={option}
            >
              {option}
            </StyledButton>
          );
        })}
      </AnswerContainer>
      {answer && (
        <div>
          <p>{`The answer is ${statusAnswer()}`}</p>
          <Button
            type="button" onClick={handleNext}>
           Next Question
          </Button>
        </div>
      )}
      <h2>
        Question {question.id}/{questionsLength}
      </h2>
    </Wrapper>
  );
};
