import { IIssueChild } from '../../interfaces/IIssue';
import * as S from './IssueItem.style';
import IssueTitle from './IssueTitle';

const IssueItem = ({ issue }: IIssueItemProps) => {
  const issueTitleProps = {
    title: issue.title,
    issueNumber: issue.number,
    writer: issue.user.login,
    date: issue.created_at,
    comments: issue.comments,
  };
  return (
    <S.IssueItem>
      <IssueTitle {...issueTitleProps} />
    </S.IssueItem>
  );
};

interface IIssueItemProps {
  issue: IIssueChild;
}

export default IssueItem;
