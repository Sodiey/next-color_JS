_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"20a2":function(e,t,n){e.exports=n("nOHt")},"KX+K":function(e,t,n){"use strict";n.r(t);var c=n("ODXe"),r=n("nKUr"),i=n("q1tI"),o=n("tcOx"),a=n("eM/t"),l=n("9fDg"),s=n("pm6h"),u=n("YFqc"),d=n.n(u),j=n("G8i6"),h=n("afyi"),b=n("pzdU"),f=n("8k8F"),x=function(e){var t=e.value,n=e.render,r=Object(i.useRef)(t),o=b.HEX_to_HSV(t),a=b.make_scheme(o,{scheme_type:"triadic"}),l=Object(f.a)(a,{reset:!0}),s=Object(c.a)(l,3),u=s[0],d=(s[1],s[2]);return r.current!==t&&(d(),r.current=t),n(u)},v=n("20a2"),O=function(e){var t=e.hasCopied,n=e.contrast,c=e.handleCopy;return Object(r.jsx)("div",{style:{border:"2px solid ".concat(t?"green":n.value),borderRadius:"10px",padding:5,position:"absolute",top:5,right:5},children:Object(r.jsx)(l.a,{onClick:c,children:Object(r.jsx)(s.a,{style:{margin:0},size:".8rem",contrast:n.value,id:"copy-text",children:"Copy"})})})},m=function(e){var t=e.color,n=t.hex,c=t.contrast,a=t.name,u=Object(i.useState)(!1),b=u[0],f=u[1];Object(i.useEffect)((function(){if(b){var e=setTimeout((function(){f(!1)}),500);return function(){clearTimeout(e)}}}),[b]);return Object(r.jsx)(o.b,{color:n.value,children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(s.a,{contrast:c.value,children:a.value}),Object(r.jsx)(O,{hasCopied:b,contrast:c,handleCopy:function(){var e=n.value;navigator.clipboard.writeText(e),f(!0)}}),Object(r.jsx)(s.a,{style:{fontSize:"1rem"},contrast:c.value,children:n.value}),Object(r.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[Object(r.jsx)(h.a,{contrast:c.value}),Object(r.jsx)(d.a,{href:"/detail/[id]",as:"/next-color_JS"+"/detail/".concat(Object(j.b)({value:n.value,name:a.value,contrast:c.value})),children:Object(r.jsx)(l.c,{contrast:c.value,children:"See detail"})})]})]})})},p=function(e){var t=e.title;return Object(r.jsxs)("div",{style:{width:"100vw",paddingLeft:"3rem",textAlign:"left"},children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)(h.a,{})]})},g=function(e){var t=e.item,n=t.name,c=t.value,i=t.theme,o=e.machColor,a=y(c,i,o);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{style:a.header,children:[Object(r.jsx)("div",{style:a.linkHome,children:Object(r.jsx)(d.a,{href:"/",as:"/next-color_JS/",children:"Home"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{style:{marginBottom:0},children:n}),Object(r.jsxs)("h4",{style:{textAlign:"center",marginTop:10},children:["- #",c]})]})]}),Object(r.jsx)(p,{title:"Pallete"})]})};var y=function(e,t,n){return{header:{backgroundColor:"#".concat(e),color:"light"===t?"#000":"#fff",display:"flex",alignItems:"center"},linkHome:{width:"47%",marginLeft:30,fontWeight:"700",fontSize:"1.3rem",color:n}}};t.default=function(){var e=Object(i.useState)(),t=e[0],n=e[1],l=Object(v.useRouter)().query.id;if(console.log(l),Object(i.useEffect)((function(){l&&Object(a.b)(h).then((function(e){return n(e)}))}),[l]),!l)return null;var s=function(e){var t=e.split("-"),n=t[0];return[t[1],n,t[2]]}(l),u=Object(c.a)(s,3),d=u[0],h=u[1],b=u[2];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g,{machColor:null===t||void 0===t?void 0:t.colors["dark"===b?9:0].hex.value,item:{name:d,value:h,theme:b}}),Object(r.jsx)(o.c,{children:null===t||void 0===t?void 0:t.colors.map((function(e,t){if(!(t>4))return Object(r.jsx)(m,{color:e},t)}))}),Object(r.jsx)(p,{title:"Matched Colors"}),Object(r.jsx)(x,{value:h,render:function(e){return Object(r.jsx)(o.c,{children:null===e||void 0===e?void 0:e.map((function(e,t){var n=new j.a(e);return Object(r.jsx)(m,{color:n},t)}))})}})]})}},"R/LS":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail/[id]",function(){return n("KX+K")}])}},[["R/LS",0,2,1,3]]]);