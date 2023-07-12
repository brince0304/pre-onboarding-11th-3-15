import * as S from './IssueReaction.style';

const IssueReaction = ({ reaction, count }: IIssueReactionProps) => {
  const getEmoji = (reaction: string) => {
    if (reaction === '+1') return '👍';
    if (reaction === '-1') return '👎';
    if (reaction === 'laugh') return '😆';
    if (reaction === 'hooray') return '🎉';
    if (reaction === 'confused') return '😕';
    if (reaction === 'heart') return '❤️';
    if (reaction === 'rocket') return '🚀';
    if (reaction === 'eyes') return '👀';
  };
  return (
    <S.Container>
      <div>{getEmoji(reaction)}</div>
      <span>{' ' + count}</span>
    </S.Container>
  );
};

export interface IIssueReactionProps {
  reaction: 'total_count' | '+1' | '-1' | 'laugh' | 'hooray' | 'confused' | 'heart' | 'rocket' | 'eyes';
  count: number;
}

export default IssueReaction;
