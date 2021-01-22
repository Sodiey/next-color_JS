import { useRef } from 'react';
import * as Please from 'pleasejs';
import { useColors } from '../api/useColor';

const MatchedColors = ({ value, render }) => {
  const colorRef = useRef(value);
  const hsv = Please.HEX_to_HSV(value);
  const matchedColors = Please.make_scheme(hsv, {
    scheme_type: 'triadic',
  });
  const [colors, isFetching, fetchMore] = useColors(matchedColors, {
    reset: true,
  });
  if (colorRef.current !== value) {
    fetchMore();
    colorRef.current = value;
  }
  return render(colors);
};

export default MatchedColors;
