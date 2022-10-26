import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';
import swal from 'sweetalert';

const Container = styled.div`
  background-color: red;
  width: 100%;
  max-width: 80rem;
  margin: 5rem auto;
`;

export const CurrentQuestion = () => {
  const question = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex]
  );
  const questions = useSelector((store) => store.quiz.questions.length);

  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  // const onAnswerSubmit = (id, index) => {
  //   dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  // }
  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      swal({
        title: 'Good job!',
        text: 'You picked the right one!',
        icon: 'success',
        button: 'continue'
      });

      dispatch(quiz.actions.goToNextQuestion());
    } else {
      swal({
        title: 'Wrong answer!',
        icon: 'error',
        button: 'continue'
      });

      dispatch(quiz.actions.goToNextQuestion());
      // window.alert('Sorry, wrong answer!!');
    }
  };

  return (
    <Container>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => {
        return (
          <button
            onClick={() => onAnswerSubmit(question.id, index)}
            key={option}
            type="button"
          >
            {option}
          </button>
        );
      })}
      <p>
        Question {question.id}/{questions}
      </p>
    </Container>
  );
};
