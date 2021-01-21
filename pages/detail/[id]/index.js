// import { useEffect, useLayoutEffect, useState } from 'react';
// import { StyledContainer, StyledColumn, Card } from 'styled/containers';
// import { fetchColorDetail } from 'api/fetchColor';
// import { LinkButton, DryButton } from 'styled/button';
// import { WithThemeText } from 'styled/text';
// import Link from 'next/link';
// import { generateParameter, ColorModel } from 'api/utils';
// import Hr from 'components/Hr';
// import MatchedColors from 'components/MatchedColors';

// import { useRouter } from 'next/router';

// const useSplitId = (id) => {
//   const splitId = id.split('-');
//   const value = splitId[0];
//   const name = splitId[1];
//   const theme = splitId[2];
//   return [name, value, theme];
// };

// const CopyText = ({ hasCopied, contrast, handleCopy }) => (
//   <div
//     style={{
//       border: `2px solid ${hasCopied ? 'green' : contrast.value}`,
//       borderRadius: '10px',
//       padding: 5,
//       position: 'absolute',
//       top: 5,
//       right: 5,
//     }}
//   >
//     <DryButton onClick={handleCopy}>
//       <WithThemeText
//         style={{ margin: 0 }}
//         size=".8rem"
//         contrast={contrast.value}
//         id="copy-text"
//       >
//         Copy
//       </WithThemeText>
//     </DryButton>
//   </div>
// );

// const RederItem = ({ color }) => {
//   const { hex, contrast, name } = color;
//   const withoutHashtag = hex.value.substring(1, hex.value.length);
//   const [hasCopied, setHasCopied] = useState(false);
//   useEffect(() => {
//     if (hasCopied) {
//       const cleanUp = setTimeout(() => {
//         setHasCopied(false);
//       }, 500);
//       return () => {
//         clearTimeout(cleanUp);
//       };
//     }
//   }, [hasCopied]);

//   const _handleCopy = () => {
//     let copyText = hex.value;
//     navigator.clipboard.writeText(copyText);
//     setHasCopied(true);
//   };
//   return (
//     <StyledColumn color={hex.value}>
//       <Card>
//         <WithThemeText contrast={contrast.value}>{name.value}</WithThemeText>
//         <CopyText
//           hasCopied={hasCopied}
//           contrast={contrast}
//           handleCopy={_handleCopy}
//         />
//         <WithThemeText style={{ fontSize: '1rem' }} contrast={contrast.value}>
//           {hex.value}
//         </WithThemeText>
//         <div
//           style={{
//             height: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'flex-end',
//           }}
//         >
//           <Hr contrast={contrast.value} />
//           <Link
//             href="/detail/[id]/"
//             as={
//               process.env.BACKEND_URL +
//               `/detail/${generateParameter({
//                 value: hex.value,
//                 name: name.value,
//                 contrast: contrast.value,
//               })}`
//             }
//           >
//             <LinkButton contrast={contrast.value}>See detail</LinkButton>
//           </Link>
//         </div>
//       </Card>
//     </StyledColumn>
//   );
// };

// const SectionTitle = ({ title }) => (
//   <div style={{ width: '100vw', paddingLeft: '3rem', textAlign: 'left' }}>
//     <h1>{title}</h1>
//     <Hr />
//   </div>
// );

// const HeaderDetail = ({ item: { name, value, theme }, machColor }) => {
//   const styles = styleSheet(value, theme, machColor);

//   return (
//     <>
//       <div style={styles.header}>
//         <div style={styles.linkHome}>
//           <Link href="/" as={process.env.BACKEND_URL + '/'}>
//             Home
//           </Link>
//         </div>
//         <div>
//           <h1 style={{ marginBottom: 0 }}>{name}</h1>
//           <h4 style={{ textAlign: 'center', marginTop: 10 }}>- #{value}</h4>
//         </div>
//       </div>
//       <SectionTitle title="Pallete" />
//     </>
//   );
// };

// function Detail() {
//   const [data, setData] = useState();
//   const {
//     query: { id },
//   } = useRouter();

//   //useLayoutEffect
//   useEffect(() => {
//     if (id) {
//       fetchColorDetail(value).then((data) => setData(data));
//       // data.seed holds the color OBJ that the url is based
//     }
//   }, [id]);

//   if (!id) return null;
//   const [name, value, theme] = useSplitId(id);
//   return (
//     <>
//       <HeaderDetail
//         machColor={data?.colors[theme === 'dark' ? 9 : 0].hex.value}
//         item={{ name, value, theme }}
//       />
//       <StyledContainer>
//         {data?.colors.map((clr, i) => {
//           if (i > 4) return;
//           return <RederItem key={i} color={clr} />;
//         })}
//       </StyledContainer>
//       <SectionTitle title="Matched Colors" />
//       <MatchedColors
//         value={value}
//         render={(colors) => (
//           <StyledContainer>
//             {colors?.map((clr, i) => {
//               const colorObj = new ColorModel(clr);
//               return <RederItem key={i} color={colorObj} />;
//             })}
//           </StyledContainer>
//         )}
//       />
//     </>
//   );
// }

// const styleSheet = (color, theme, machColor) => ({
//   header: {
//     backgroundColor: `#${color}`,
//     color: theme === 'light' ? '#000' : '#fff',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   linkHome: {
//     width: '47%',
//     marginLeft: 30,
//     fontWeight: '700',
//     fontSize: '1.3rem',
//     color: machColor,
//   },
// });

// export default Detail;
