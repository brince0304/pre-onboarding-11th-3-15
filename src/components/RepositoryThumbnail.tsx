import { Button, Tooltip } from '@mui/material';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

const RepositoryThumbnail = ({ repo, owner }: IRepositoryThumbnailProps) => {
  const hash = uuid();
  const navigate = useNavigate();
  const handleClickThumbnail = () => {
    navigate('/issues');
  };
  return (
    <Tooltip title={'클릭해서 열려있는 이슈를 확인해보세요!'} arrow>
      <Button
        sx={{
          scale: '0.4',
        }}
        onClick={handleClickThumbnail}
      >
        <img src={`https://opengraph.githubassets.com/${hash}/${owner}/${repo}`} alt="thumbnail" />
      </Button>
    </Tooltip>
  );
};

interface IRepositoryThumbnailProps {
  repo: string;
  owner: string;
}

export default RepositoryThumbnail;
