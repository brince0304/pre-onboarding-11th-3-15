import { Button, Tooltip } from '@mui/material';
import uuid from 'react-uuid';

const RepositoryThumbnail = ({ repo, owner }: IRepositoryThumbnailProps) => {
  const hash = uuid();

  return (
    <Tooltip title={'클릭해서 열려있는 이슈를 확인해보세요!'} arrow>
      <Button>
        <img
          src={`https://opengraph.githubassets.com/${hash}/${owner}/${repo}`}
          alt="thumbnail"
          style={{ scale: '0.7' }}
        />
      </Button>
    </Tooltip>
  );
};

interface IRepositoryThumbnailProps {
  repo: string;
  owner: string;
}

export default RepositoryThumbnail;
