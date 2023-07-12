import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RefreshButton = styled(IconButton)`
  &:hover {
    transform: rotate(360deg);
    transition: all 0.7s ease;
  }
`;
