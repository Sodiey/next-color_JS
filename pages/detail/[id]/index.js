import { useLayoutEffect, useState } from 'react';
import { StyledContainer, StyledColumn } from '../../../styled/containers';
import { fetchColorDetail } from '../../../api/fetchColor';
import { CardButton, LinkButton } from '../../../styled/button';
import { WithThemeText } from '../../../styled/text';
import Link from 'next/link';

import { useRouter } from 'next/router';

const useSplitId = (id) => {
  console.log(id);
  const splitId = id.split('-');
  const value = splitId[0];
  const name = splitId[1];
  const theme = splitId[2];
  return [name, value, theme];
};

const Hr = ({ contrast }) => (
  <hr
    style={{
      borderColor: contrast,
    }}
  />
);

const RederItem = ({ color }) => {
  const { hex, contrast, name } = color;
  const withoutHashtag = hex.value.substring(1, hex.value.length);

  return (
    <StyledColumn color={hex.value}>
      <CardButton>
        <WithThemeText contrast={contrast.value}>{name.value}</WithThemeText>
        <WithThemeText contrast={contrast.value}>{hex.value}</WithThemeText>
        <Hr contrast={contrast.value} />
        <Link
          href="/detail/[id]/"
          as={`/detail/${withoutHashtag + '-' + name.value}`}
        >
          <LinkButton contrast={contrast.value}>See detail</LinkButton>
        </Link>
      </CardButton>
    </StyledColumn>
  );
};

function Detail() {
  const [data, setData] = useState();
  const {
    query: { id },
  } = useRouter();

  useLayoutEffect(() => {
    if (id) {
      fetchColorDetail(value).then((data) => setData(data));
    }
  }, [id]);

  if (!id) return null;
  const [name, value, theme] = useSplitId(id);
  const styles = styleSheet(value, theme);

  return (
    <StyledContainer>
      <div style={styles.header}>
        <h1>{name}</h1>
      </div>
      {data?.colors.map((clr, i) => {
        return <RederItem key={i} color={clr} />;
      })}
    </StyledContainer>
  );
}

const styleSheet = (color, theme) => ({
  header: {
    width: '100vw',
    backgroundColor: `#${color}`,
    minHeight: '100px',
    textAlign: 'center',
    color: theme === 'light' ? '#000' : '#fff',
  },
});

export default Detail;
