import styled from '@emotion/styled';

export const Image = styled.img`
  opacity: 0.8;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    > img {
      opacity: 1;
      transition: all 0.3s ease;
    }
  }
`;
