import ReactMarkdown from 'react-markdown';
import * as S from './IssueDetails.style';
import { IIssueChild } from '../../interfaces/IIssues';
import IssueReactions from '../IssueReactions/IssueReactions';
import IssueDetailTitle from './IssueDetailTitle/IssueDetailTitle';
import { formatDate } from '../../utils';
import remarkGfm from 'remark-gfm';

const IssueDetails = ({ issue }: IIssueDetailsProps) => {
  const titleProps = {
    avatarUrl: issue.user.avatar_url,
    title: issue.title,
    issueNumber: issue.number,
    author: issue.user.login,
    createdAt: formatDate(issue.created_at),
    comments: issue.comments,
  };
  return (
    <S.Container>
      <S.FixedContainer>
      <IssueDetailTitle {...titleProps} />
        <IssueReactions {...issue.reactions} />
      </S.FixedContainer>
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt="" />,
          code: ({ node, ...props }) => (
            <S.CodeBox{...props} />
          ),
        }}
        remarkPlugins={[remarkGfm]}
      >
        {issue.body}
      </ReactMarkdown>
    </S.Container>
  );
};

interface IIssueDetailsProps {
  issue: IIssueChild;
}

export default IssueDetails;
