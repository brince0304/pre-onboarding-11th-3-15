import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

export const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 600;
  color: #121212;
`;

export const IssueNumber = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #586069;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
  gap: 10px;
  color: #586069;
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  gap: 10px;
  color: #586069;
`;
