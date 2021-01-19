import { useEffect, useLayoutEffect, useState } from 'react';
import { StyledContainer, StyledColumn, Card } from 'styled/containers';
import { fetchColorDetail } from 'api/fetchColor';
import { LinkButton, DryButton } from 'styled/button';
import { WithThemeText } from 'styled/text';
import Link from 'next/link';
import { generateParameter } from 'api/utils';

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

const CopyText = ({ hasCopied, contrast, handleCopy }) => (
  <div
    style={{
      border: `2px solid ${hasCopied ? 'green' : contrast.value}`,
      borderRadius: '10px',
      padding: 5,
      position: 'absolute',
      top: 5,
      right: 5,
    }}
  >
    <DryButton onClick={handleCopy}>
      <WithThemeText
        style={{ margin: 0 }}
        size=".8rem"
        contrast={contrast.value}
        id="copy-text"
      >
        Copy
      </WithThemeText>
    </DryButton>
  </div>
);

const RederItem = ({ color }) => {
  const { hex, contrast, name } = color;
  const withoutHashtag = hex.value.substring(1, hex.value.length);
  const [hasCopied, setHasCopied] = useState(false);
  useEffect(() => {
    if (hasCopied) {
      const cleanUp = setTimeout(() => {
        setHasCopied(false);
      }, 500);
      return () => {
        clearTimeout(cleanUp);
      };
    }
  }, [hasCopied]);

  const _handleCopy = () => {
    let copyText = hex.value;
    navigator.clipboard.writeText(copyText);
    setHasCopied(true);
  };
  return (
    <StyledColumn color={hex.value}>
      <Card>
        <WithThemeText contrast={contrast.value}>{name.value}</WithThemeText>
        <CopyText
          hasCopied={hasCopied}
          contrast={contrast}
          handleCopy={_handleCopy}
        />
        <WithThemeText style={{ fontSize: '1rem' }} contrast={contrast.value}>
          {hex.value}
        </WithThemeText>
        <Hr contrast={contrast.value} />
        <Link
          href="/detail/[id]/"
          as={`/detail/${generateParameter({
            value: hex.value,
            name: name.value,
            contrast: contrast.value,
          })}`}
        >
          <LinkButton contrast={contrast.value}>See detail</LinkButton>
        </Link>
      </Card>
    </StyledColumn>
  );
};

const HeaderDetail = ({ item: { name, value, theme }, machColor }) => {
  const styles = styleSheet(value, theme, machColor);

  return (
    <>
      <div style={styles.header}>
        <div style={styles.linkHome}>
          <Link href="/">Home</Link>
        </div>
        <div>
          <h1 style={{ marginBottom: 0 }}>{name}</h1>
          <h4 style={{ textAlign: 'center', marginTop: 10 }}>- #{value}</h4>
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
        machColor={data?.colors[theme === 'dark' ? 9 : 0].hex.value}
        item={{ name, value, theme }}
      />
      <StyledContainer>
        {data?.colors.map((clr, i) => {
          if (i > 5) return;
          return <RederItem key={i} color={clr} />;
        })}
      </StyledContainer>
    </>
  );
}

const styleSheet = (color, theme, machColor) => ({
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
    color: machColor,
  },
});

export default Detail;
