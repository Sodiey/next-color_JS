import { useCallback, useState } from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.css';
import Main from 'components/Main';
import { useColors } from 'api/useColor';
import { FetchButton } from 'styled/button';

const MyButton = ({ onClick }) => {
  return (
    <div>
      <FetchButton onClick={onClick}>Fetch more</FetchButton>
    </div>
  );
};

export default function Home() {
  const [headerColor, setHeaderColor] = useState('#0070f3');
  const [colors, isFetching, fetchMore] = useColors(20, { reset: false });

  const handleColor = useCallback((color) => {
    setHeaderColor(color);
    window.scrollTo(0, 0);
  }, []);

  const handleFetchMore = useCallback(() => {
    fetchMore();
    window.scrollTo(0, document.body.scrollHeight);
  }, [fetchMore]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{ color: headerColor }}>Next.js</span>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <FetchButton onClick={handleFetchMore}>Fetch more</FetchButton>
      </header>
      <Main colors={colors} isFetching={isFetching} handleColor={handleColor} />
    </div>
  );
}

//GREAT Match  - #031609 (is Dark ) _with - rgb(25, 204, 82) (is Light )
