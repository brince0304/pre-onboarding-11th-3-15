import { IIssueChild } from '../interfaces/IIssue';
import { ListItemButton, Typography } from '@mui/material';

const IssueItem = ({ issue }: IIssueItemProps) => {
  return (
    <ListItemButton>
      <Typography>
        `#${issue.number} ${issue.title} ${issue.state} ${issue.created_at} by ${issue.user.login}`
      </Typography>
    </ListItemButton>
  );
};

interface IIssueItemProps {
  issue: IIssueChild;
}

export default IssueItem;
