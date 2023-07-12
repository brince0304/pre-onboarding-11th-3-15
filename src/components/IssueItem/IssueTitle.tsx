import * as S from './IssueTitle.style';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';

const IssueTitle = (props: IIssueTitleProps) => {
  const formatDate = (date: string) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    return `${year}년 ${month}월 ${day}일`;
  };
  const { title, issueNumber, writer, date, comments } = props;

  const formattedDate = formatDate(date);
  return (
    <S.IssueTitleContainer>
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
