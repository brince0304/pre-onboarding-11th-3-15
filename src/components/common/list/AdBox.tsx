import * as S from './AdBox.style';

const AdBox = ({ width, height, src, alt, linkTo }: IAdBoxProps) => {
  const handleLinkTo = () => {
    if (typeof linkTo === 'string') {
      window.location.href = linkTo;
    }
  };
  return (
    <S.Container
      onClick={handleLinkTo}
      style={{
        width: width,
        height: height,
      }}
    >
      <S.Image src={src} alt={alt} />
    </S.Container>
  );
};

interface IAdBoxProps {
  width?: string;
  height?: string;
  src?: string;
  alt?: string;
  linkTo?: string;
}

export default AdBox;
