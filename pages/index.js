import { useCallback, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Main from '../components/Main';
import { useColors } from '../api/useColor';
import { FetchButton } from '../styled/button';

export default function Home() {
  const [headerColor, setHeaderColor] = useState('#0070f3');
  const [bgColor, setBgColor] = useState('#f2efe8');
  const [colors, isFetching, fetchMore] = useColors(20, { reset: false });

  const handleColor = useCallback((color, node) => {
    if (node === 'bg') setBgColor(color);
    else setHeaderColor(color);
    window.scrollTo(0, 0);
  }, []);

  const handleFetchMore = useCallback(() => {
    fetchMore();
    window.scrollTo(0, document.body.scrollHeight);
  }, [fetchMore]);

  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{ color: headerColor }}>Color</span>.js
        </h1>
        <p className={styles.description}>
          Get started by coping <code className={styles.code}>{bgColor}</code>
        </p>
        <FetchButton onClick={handleFetchMore}>Fetch more</FetchButton>
      </header>
      <Main colors={colors} isFetching={isFetching} handleColor={handleColor} />
    </div>
  );
}

//GREAT Match  - #031609 (is Dark ) _with - rgb(25, 204, 82) (is Light )
