import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  background-color: #333333;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2.4rem;
`;

export const TextArea = styled.textarea`
  width: 100%;

  padding: 1rem;

  height: 16rem;

  border-radius: 8px;
  border: 1px solid #D0D5DD;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;

  resize: none;
`;
