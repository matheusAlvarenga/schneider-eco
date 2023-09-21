import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #333;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 12.8rem);

  margin: 6.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  border-radius: 40px;
  background-color: white;
`;

export const Logo = styled.img`
  width: 32rem;
`;

export const Wrapper = styled.span`
  display: flex;
  gap: 12.8rem;
`;

export const Divider = styled.div`
  height: 54rem;
  width: 1px;
  background-color: #626469;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  color: #333;

  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding-top: 3.2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.8rem;
`;

export const InputLabel = styled.label`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
`;

export const Input = styled.input`
  width: 30rem;
  padding: 1rem 1.4rem;

  border-radius: 8px;
  border: 1px solid #D0D5DD;

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`;
