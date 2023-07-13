import * as S from './AdBox.style';

const AdBox = ({ width, height, src, alt, linkTo }: IAdBoxProps) => {
  return (
    <S.Container
      style={{
        width: width,
        height: height,
      }}
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
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
