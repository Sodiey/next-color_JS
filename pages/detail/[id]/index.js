import { useLayoutEffect, useState } from 'react';
import { StyledContainer, StyledColumn } from '../../../styled/containers';
import { fetchColorDetail } from '../../../api/fetchColor';
import { CardButton, LinkButton } from '../../../styled/button';
import { WithThemeText } from '../../../styled/text';
import Link from 'next/link';

import { useRouter } from 'next/router';

const useSplitId = (id) => {
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
        <WithThemeText style={{ fontSize: '1rem' }} contrast={contrast.value}>
          {hex.value}
        </WithThemeText>
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

const HeaderDetail = ({ item: { name, value, theme }, firstDarkColor }) => {
  const styles = styleSheet(value, theme, firstDarkColor);

  return (
    <>
      <div style={styles.header}>
        <div style={styles.linkHome}>
          <Link href="/">Home</Link>
        </div>
        <div>
          <h1>{name}</h1>
          <h4 style={{ textAlign: 'center' }}>#{value}</h4>
        </div>
      </div>
      <div style={styles.sectionTitle}>
        <h1>Pallete</h1>
        <Hr />
      </div>
    </>
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

  return (
    <>
      <HeaderDetail
        firstDarkColor={data?.colors[0].hex.value}
        item={{ name, value, theme }}
      />
      <StyledContainer>
        {data?.colors.map((clr, i) => {
          return <RederItem key={i} color={clr} />;
        })}
      </StyledContainer>
    </>
  );
}

const styleSheet = (color, theme, firstDarkColor) => ({
  header: {
    backgroundColor: `#${color}`,
    color: theme === 'light' ? '#000' : '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  sectionTitle: {
    width: '100vw',
    paddingLeft: '3rem',
    textAlign: 'left',
  },
  linkHome: {
    width: '47%',
    marginLeft: 30,
    fontWeight: '700',
    fontSize: '1.3rem',
    color: firstDarkColor,
  },
});

export default Detail;
