import { useEffect, useState } from 'react';
import { fetchColor } from './fetchColor';

export const useColors = (rows) => {
  const fakeArray = Array.from({ length: rows });
  const [colors, setColors] = useState([]);
  const [more, setMore] = useState(false);
  const fetchMore = () => setMore(!more);

  useEffect(() => {
    fakeArray.map(async () => {
      try {
        const res = await fetchColor();
        setColors((prev) => [...prev, res]);
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    });
  }, [fetchColor, rows, more]);
  if (colors.length >= rows) return [colors, false, fetchMore];

  return [colors, true];
};
