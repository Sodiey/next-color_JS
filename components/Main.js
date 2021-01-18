import Link from 'next/link';
import { WithThemeText } from '../styled/text';
import { CardButton, LinkButton } from '../styled/button';
import { StyledContainer, StyledColumn } from '../styled/containers';

const WithLoading = ({ isFetching, children }) => {
  return isFetching ? <h1>Loading...</h1> : children;
};

const Hr = ({ contrast }) => (
  <hr
    style={{
      borderColor: contrast,
    }}
  />
);

function generateParameter({ value, name, contrast }) {
  const withoutHashtag = value.substring(1, value.length);
  const theme = contrast === '#000000' ? 'light' : 'dark';
  return withoutHashtag + '-' + name + '-' + theme;
}

const RenderItem = ({ item, handleColor }) => {
  RenderItem.prototype.title = item.value;
  const { value, name, contrast } = item;

  return (
    <StyledColumn color={value}>
      <CardButton onClick={handleColor.bind(this, value)}>
        <WithThemeText contrast={contrast}>{name}</WithThemeText>
        <Hr contrast={contrast} />
        <Link href="/detail/[id]/" as={`/detail/${generateParameter(item)}`}>
          <LinkButton contrast={contrast}>See detail</LinkButton>
        </Link>
      </CardButton>
    </StyledColumn>
  );
};

const Main = ({ colors, isFetching, handleColor }) => {
  return (
    <WithLoading isFetching={isFetching}>
      <StyledContainer>
        {colors.map((clr, i) => (
          <RenderItem key={i} item={clr} handleColor={handleColor} />
        ))}
      </StyledContainer>
    </WithLoading>
  );
};
export default Main;

// const Foo = ({ title, ...otherProps }) => {
//   // Foo.prototype.title = title;
//   const themedColor = otherProps.theme === 'dark' ? 'white' : 'black';
//   return (
//     <div>
//       <h1>{title}</h1>
//     </div>
//   );
// };

{
  /* {rows.map((item, i) => {
        const Cmp = item;
        return <Cmp key={i} />;
      })} */
}

// // let screens = {
// //   foo: Foo,
// // };

// if (!colors.length) return null;
// let screens = {};
// colors.map((clr) => {
//   screens[`${clr.value}-${clr.value}`] = Foo;
// });
// const routes = Object.keys(screens)
//   .map((id) => ({ id, item: screens[id] }))
//   .reduce((acc, { id, item }) => {
//     // const Cmp = item;
//     const decompose = id.split('-');
//     const name = decompose[0];
//     const color = decompose[1];
//     const Cmp = withColor(item, { color: color });
//     // const Cmp = item;
//     const newScreen = (props) => <Cmp title={name} {...props} />;

//     return {
//       ...acc,
//       [id]: newScreen,
//     };
//   }, {});

// const rows = Object.keys(routes).map((item) => routes[item]);

// const routes = Object.keys(screens)
// .map((id) => ({ id, item: screens[id] }))
// .reduce((acc, { id, item }) => {
//   // const Cmp = item;
//   const Cmp = withColor(item, { color: item.prototype.color });
//   const Screen = (props) => <Cmp title={item.prototype.title} {...props} />;

//   return {
//     ...acc,
//     [id]: Screen,
//   };
// }, {});
// const rows = Object.keys(routes).map((item) => routes[item]());

// const MyComponent = ({ component: Component, ...otherProps }) => {
//   const theme = lightOrDark(otherProps.options.color);
//   return (
//     <div style={{ flex: 0, backgroundColor: otherProps.options.color }}>
//       <Component {...otherProps} theme={theme} />
//     </div>
//   );
// };

// const withColor = (component, options) => {
//   return (props) => (
//     <MyComponent component={component} options={options} {...props} />
//   );
// };

// export default withColor(Main, { color: '#ff4bd2' });
