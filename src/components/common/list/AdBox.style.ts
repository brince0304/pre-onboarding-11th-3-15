import styled from '@emotion/styled';

export const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:contain;
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
  overflow: hidden;
  margin:0 auto;
  &:hover {
    > img {
      opacity: 1;
      transform: scale(1.05);
      transition: all 0.3s ease-out;
    }
  }
`;
