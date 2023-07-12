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
      <IssueDetailTitle {...titleProps} />
      <IssueReactions {...issue.reactions} />
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt="" />,
          code: ({ node, ...props }) => (
            <code
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '14px',
                backgroundColor: '#f7f7f7',
                padding: '4px',
                borderRadius: '4px',
                color: '#333',
                overflowX: 'auto',
              }}
              {...props}
            />
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
