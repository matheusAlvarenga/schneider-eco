import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '0px'};
`;
