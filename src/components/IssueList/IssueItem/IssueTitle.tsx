import * as S from './IssueTitle.style';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import { formatDate } from '../../../utils';
import { useNavigate } from 'react-router-dom';

const IssueTitle = (props: IIssueTitleProps) => {
  const { title, issueNumber, writer, date, comments } = props;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/issues/${issueNumber}`);
  };
  const formattedDate = formatDate(date);
  return (
    <S.IssueTitleContainer onClick={handleNavigate}>
      <S.IssueTitle>
        <S.IssueTitleBox>
          <S.IssueTitleBoxIssueNumber>
            <TagOutlinedIcon />
            {issueNumber}
          </S.IssueTitleBoxIssueNumber>
          <S.IssueTitleBoxTitle>{title}</S.IssueTitleBoxTitle>
        </S.IssueTitleBox>
        <S.IssueTitleInfo>
          {writer}님이 {formattedDate}에 작성하였습니다.
        </S.IssueTitleInfo>
      </S.IssueTitle>
      <S.IssueTitleComments>
        <TextsmsOutlinedIcon />
        {comments}
      </S.IssueTitleComments>
    </S.IssueTitleContainer>
  );
};

interface IIssueTitleProps {
  title: string;
  issueNumber: number;
  writer: string;
  date: string;
  comments: number;
}

export default IssueTitle;
