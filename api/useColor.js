import { useEffect, useState } from 'react';
import { fetchColor } from './fetchColor';
import * as Please from 'pleasejs';

const generateColors = (num) => {
  const fake = Array(num).fill(0);
  const fill = fake.map(() => {
    return Please.make_color({ full_random: true })[0];
  });
  return fill;
};

export const useColors = (rows, { reset }) => {
  const colorsArray = typeof rows === 'number' ? generateColors(rows) : rows;
  const [colors, setColors] = useState([]);
  const [more, setMore] = useState(false);
  const fetchMore = () => {
    if (reset) setColors([]);
    setMore(!more);
  };

  useEffect(() => {
    colorsArray.map(async (color, i) => {
      try {
        const res = await fetchColor(color);
        setColors((prev) => [...prev, res]);
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    });
  }, [more]);

  if (colors.length >= rows) return [colors, false, fetchMore];

  return [colors, true, fetchMore];
};

