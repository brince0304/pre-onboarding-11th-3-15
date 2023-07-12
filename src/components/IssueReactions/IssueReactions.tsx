import { IIssueChildReactions } from '../../interfaces/IIssues';
import * as S from './IssueReactions.style';
import IssueReaction, { IIssueReactionProps } from './IssueReaction';
const IssueReactions = (props: IIssueReactionsProps) => {
  const { '+1': plusOne, '-1': minusOne, laugh, hooray, confused, heart, rocket, eyes } = props;
  const reactions = [
    { reaction: '+1', count: plusOne },
    { reaction: '-1', count: minusOne },
    { reaction: 'laugh', count: laugh },
    { reaction: 'hooray', count: hooray },
    { reaction: 'confused', count: confused },
    { reaction: 'heart', count: heart },
    { reaction: 'rocket', count: rocket },
    { reaction: 'eyes', count: eyes },
  ] as IIssueReactionProps[];
  return (
    <S.Container>
      {reactions.map((reaction, index) => {
        return <IssueReaction key={index} reaction={reaction.reaction} count={reaction.count} />;
      })}
    </S.Container>
  );
};

interface IIssueReactionsProps extends Omit<IIssueChildReactions, 'total_count, url'> {}

export default IssueReactions;
