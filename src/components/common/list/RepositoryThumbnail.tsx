import { Button, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RepositoryThumbnail = ({ repo, owner }: IRepositoryThumbnailProps) => {
  const uuid = '433b65fc-9dfe-3d40-acc5-8ee55c71e877';
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
        <img src={`https://opengraph.githubassets.com/${uuid}/${owner}/${repo}`} alt="thumbnail" />
      </Button>
    </Tooltip>
  );
};

interface IRepositoryThumbnailProps {
  repo: string;
  owner: string;
}

export default RepositoryThumbnail;
