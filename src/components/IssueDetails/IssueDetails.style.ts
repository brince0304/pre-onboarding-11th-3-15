import styled from '@emotion/styled';

export const Container = styled.div`
  width: 478px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 20px;
  overflow-y: auto;
  overflow-x: auto;
  position: relative;
  margin-top: 122px;
`;

export const FixedContainer = styled.div`
  display: flex;
  width: 478px;
  box-sizing: border-box;
  flex-direction: column;
  position: fixed;
  top: 61px;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: #fff;
  padding: 10px 10px;
  border-bottom: 1px solid #e1e4e8;
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04);
  gap: 10px;
`;

export const CodeBox = styled.code`
  font-family: 'Courier New', monospace;
  font-size: 14px;
  background-color: #f7f7f7;
  padding: 4px;
  border-radius: 4px;
  color: #333;
  margin-top: 10px;
`;
