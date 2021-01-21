import Link from 'next/link';
import { WithThemeText } from 'styled/text';
import { LinkButton, DryButton } from 'styled/button';
import { StyledContainer, StyledColumn, Card } from 'styled/containers';
import { generateParameter } from 'api/utils';
import Hr from 'components/Hr';

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

const Try = ({ contrast, onClick }) => (
  <div
    style={{
      border: `2px solid ${contrast}`,
      borderRadius: '10px',
      padding: '5px 8px',
      position: 'absolute',
      top: 5,
      right: 5,
    }}
  >
    <DryButton onClick={onClick}>
      <WithThemeText style={{ margin: 0 }} size="1rem" contrast={contrast}>
        Try
      </WithThemeText>
    </DryButton>
  </div>
);

const RenderItem = ({ item, handleColor }) => {
  const { value, name, contrast } = item;
  if (name === 'Black') return null;

  return (
    <StyledColumn color={value}>
      <Card>
        <WithThemeText
          onClick={handleColor.bind(this, value, 'bg')}
          contrast={contrast}
        >
          {name}
        </WithThemeText>
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Hr contrast={contrast} />
          <Try
            contrast={contrast}
            onClick={handleColor.bind(this, value, 'title')}
          />
          <Link
            href="/detail/[id]"
            as={process.env.BACKEND_URL + `/detail/${generateParameter(item)}`}
          >
            <LinkButton style={{ alignSelf: 'end' }} contrast={contrast}>
              See detail
            </LinkButton>
          </Link>
        </div>
      </Card>
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
