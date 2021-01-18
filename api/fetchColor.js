import axios from 'axios';
export const fetchColor = async () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  try {
    const res = await axios.get(`https://www.thecolorapi.com/id?hex=${color}`);
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
      `https://www.thecolorapi.com/scheme?hex=${color}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
