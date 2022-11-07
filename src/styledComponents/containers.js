import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #b2e2e0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 300px;
  height: 300px;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 10px 10px #87afad;
  justify-content: flex-start;
`;

// Rating Components
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 5vh;
  font-size: 30px;
`;
export const Rating = styled.div`
  cursor: pointer;
`;
export const Radio = styled.input`
	display: none;
`;
