import{i as e,r as l,j as o}from"./index-4afb4dc6.js";import{a as p,g as a}from"./submitOrder-acdf22ab.js";const x=e.button`
  width: 250px;
  height: 120px;
  text-transform: uppercase;
  display: inline-block;
  padding: 10px 20px;
  background-color: #998787;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 2px;

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    background-color: #45a049;
  }
`,u=({loadGoods:i})=>{const[n,c]=l.useState(null),r=["mcduck","theshaurma","elari","faina","sushiabw"],t=(s,d)=>{i(d),c(s)};return o.jsx("ul",{children:r.map((s,d)=>o.jsx("li",{children:o.jsx(x,{onClick:()=>{t(d,s)},disabled:n!==null&&n!==d,children:`${s}`})},s))})},f=e.div`
  display: flex;
  gap: 32px;
  justify-content: flex-start;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
`,h=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 18px;
`,b=e.h2`
  margin-bottom: 18px;
`,m=e.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;

  height: 680px;
  overflow: auto;
`,g=e.li`
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
  display: flex;
`,k=e.img`
  width: 330px;
  height: 220px;
  object-fit: cover;
  border-radius: 15px;
`,j=e.p`
  font-size: 28px;
  margin-top: 12px;
  margin-right: auto;
`,w=e.button`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 12px;
  margin-left: auto;
  background-color: #368639;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #45a049;
  }
`,y=e.p`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
  text-align: center;
`,B=()=>{const[i,n]=l.useState([]);function c(r){switch(r){case"mcduck":a("mcduck").then(t=>{n(t)});break;case"theshaurma":a("theshaurma").then(t=>{n(t)});break;case"elari":a("elari").then(t=>{n(t)});break;case"faina":a("faina").then(t=>{n(t)});break;case"sushiabw":a("sushiabw").then(t=>{n(t)});break;default:return}}return o.jsxs(f,{children:[o.jsxs(h,{children:[o.jsx(b,{children:"Shops:"}),o.jsx(u,{loadGoods:c})]}),o.jsx(m,{children:i.length?i==null?void 0:i.map(r=>o.jsxs(g,{children:[o.jsx(k,{src:r.image,alt:r.titel}),o.jsx(j,{children:r.titel}),o.jsx(w,{type:"button",onClick:()=>p(r),children:"Add to Cart"})]},r._id)):o.jsx(y,{children:"Welcome! Choose a store to order delicious food."})})]})};export{B as default};
