import Link from 'next/link';
import { WithThemeText } from '../styled/text';
import { CardButton, LinkButton } from '../styled/button';
import { StyledContainer, StyledColumn } from '../styled/containers';

const WithLoading = ({ isFetching, children }) => {
  return isFetching ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <h1>Loading...</h1>
    </div>
  ) : (
    children
  );
};

const Hr = ({ contrast }) => (
  <hr
    style={{
      borderColor: contrast,
    }}
  />
);

function generateParameter({ value, name, contrast }) {
  const withoutHashtag = value.substring(1, value.length);
  const theme = contrast === '#000000' ? 'light' : 'dark';
  return withoutHashtag + '-' + name + '-' + theme;
}

const RenderItem = ({ item, handleColor }) => {
  RenderItem.prototype.title = item.value;
  const { value, name, contrast } = item;

  return (
    <StyledColumn color={value}>
      <CardButton onClick={handleColor.bind(this, value)}>
        <WithThemeText contrast={contrast}>{name}</WithThemeText>
        <Hr contrast={contrast} />
        <Link href="/detail/[id]/" as={`/detail/${generateParameter(item)}`}>
          <LinkButton contrast={contrast}>See detail</LinkButton>
        </Link>
      </CardButton>
    </StyledColumn>
  );
};

const Main = ({ colors, isFetching, handleColor }) => {
  return (
    <WithLoading isFetching={isFetching}>
      <StyledContainer>
        {colors.map((clr, i) => (
          <RenderItem key={i} item={clr} handleColor={handleColor} />
        ))}
      </StyledContainer>
    </WithLoading>
  );
};
export default Main;
