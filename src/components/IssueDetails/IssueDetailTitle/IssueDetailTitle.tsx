import * as S from './IssueDetailTitle.style';
import { Avatar } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import TagIcon from '@mui/icons-material/Tag';
import { TitleInfo } from './IssueDetailTitle.style';
const IssueDetailTitle = (props: IIssueDetailTitleProps) => {
  const { avatarUrl, title, issueNumber, author, createdAt, comments } = props;
  return (
    <S.Container>
      <Avatar src={avatarUrl} />
      <TitleInfo>
        <S.Title>
          <S.IssueNumber>
            <TagIcon sx={{ width: '15px', height: '15px' }} />
            {issueNumber}
          </S.IssueNumber>
          <span>{title}</span>
        </S.Title>
        <S.Info>
          <span>{author}</span>
          <span>{createdAt}</span>
        </S.Info>
      </TitleInfo>
      <S.Comments>
        <ForumIcon sx={{ width: '15px', height: '15px' }} />
        {comments}
      </S.Comments>
    </S.Container>
  );
};

interface IIssueDetailTitleProps {
  avatarUrl: string;
  title: string;
  issueNumber: number;
  author: string;
  createdAt: string;
  comments: number;
}

export default IssueDetailTitle;
