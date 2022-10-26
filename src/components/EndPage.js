import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const EndPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>This is the end page!</p>
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
