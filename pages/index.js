import { useCallback, useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Main from '../components/Main';
import { useColors } from '../api/useColor';
import { FetchButton } from '../styled/button';

const MyButton = ({ onClick }) => {
  return (
    <div>
      <FetchButton onClick={onClick}>Fetch more</FetchButton>
    </div>
  );
};

export default function Home() {
  const [color, setColor] = useState('#0070f3');
  const [colors, isFetching, fetchMore] = useColors(10);

  const handleColor = useCallback((color) => {
    setColor(color);
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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{ color: color }}>Next.js</span>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <MyButton onClick={handleFetchMore} />
      </main>
      <Main colors={colors} isFetching={isFetching} handleColor={handleColor} />
    </div>
  );
}
