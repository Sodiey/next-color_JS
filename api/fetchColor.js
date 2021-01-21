import axios from 'axios';
// import * as Please from 'pleasejs';
import { withoutHashtag } from './utils';

export const fetchColor = async (color) => {
  // let color = Math.floor(Math.random() * 16777215).toString(16);
  // let color1 = Please.make_color({ full_random: true })[0];
  // const withoutHashtag = color1.substring(1, color1.length);
  try {
    const noHashTag = withoutHashtag(color);
    const res = await axios.get(
      `https://www.thecolorapi.com/id?hex=${noHashTag}`
    );
    return {
      name: res.data.name.value,
      value: res.data.hex.value,
      contrast: res.data.contrast.value,
    };
  } catch (err) {
    console.log(err);
  }
};

export const fetchColorDetail = async (color) => {
  try {
    const res = await axios.get(
      `https://www.thecolorapi.com/scheme?hex=${color}&count=10&mode=monochrome-dark`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
