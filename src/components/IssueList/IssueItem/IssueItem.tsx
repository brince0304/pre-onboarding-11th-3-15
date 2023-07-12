import { IIssueChild } from '../../../interfaces/IIssues';
import * as S from './IssueItem.style';
import IssueDetailTitle from '../../IssueDetails/IssueDetailTitle/IssueDetailTitle';
import { ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../utils';

const IssueItem = ({ issue }: IIssueItemProps) => {
  const issueTitleProps = {
    title: issue.title,
    issueNumber: issue.number,
    author: issue.user.login,
    createdAt: formatDate(issue.created_at),
    comments: issue.comments,
    avatarUrl: issue.user.avatar_url,
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/issues/${issue.number}`);
  };
  return (
    <S.IssueItem>
      <ListItemButton onClick={handleNavigate}>
        <IssueDetailTitle {...issueTitleProps} />
      </ListItemButton>
    </S.IssueItem>
  );
};

interface IIssueItemProps {
  issue: IIssueChild;
}

export default IssueItem;
